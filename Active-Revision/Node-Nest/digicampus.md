You’re in a very good NestJS codebase to learn real backend patterns (HTTP + microservices + auth + multi-DB).
Here’s the senior-engineer walkthrough, step by step, using your project.

1) Start With NestJS Runtime Bootstrapping
Nest starts in main.ts. This file tells you how the app is wired at runtime: global prefix/versioning, validation, exception filters, and microservice startup.


main.ts
Lines 34-89
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
  });
  const configService = app.get(ConfigService);
  // ...
  app.enableCors();
  app.useGlobalFilters(new GlobalExceptionFilter());
  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'v',
  });
  app.setGlobalPrefix('api');  
  app.useGlobalPipes(new ValidationPipe());
  await bootstrapTCP(configService);
  await app.listen(configService.get('HTTP_PORT'));
}
What this teaches:

Nest app = dependency container + HTTP adapter + module graph.
Global middleware-like behavior in Nest is often via pipes/filters/guards/interceptors.
One codebase can expose both REST and TCP microservice endpoints.
2) Understand Modules First (Core Nest Mental Model)
AppModule is the root dependency graph. Feature modules are plugged in here.


app.module.ts
Lines 31-56
@Module({
  imports: [
    SentryModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.prod','.env.uat','.env.development', '.env'],
    }),
    NoticesModule, 
    NotificationsModule,
    BatchesModule,
    StudentsModule,
    AuthModule,
    // ...
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
What this teaches:

imports = other modules whose exports/providers this module needs.
controllers = entry points (transport-facing handlers).
providers = injectable services/classes managed by Nest DI.
3) Learn the Feature-Module Pattern
Use StudentsModule as your template for almost every new feature.

Registers Mongoose models with correct connection names.
Wires controller(s) + service(s).
Exports services for cross-module usage.
This is exactly how scalable Nest apps are organized: vertical slices (students, auth, batches, etc.).

4) Controller = Transport Layer, Service = Business Layer
In this codebase:

Controller handles route + decorators + request extraction.
Service holds business logic and DB calls.
Example:


students.controller.ts
Lines 15-44
@UseGuards(AuthGuard)
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}
  @Get('account')
  @HttpCode(HttpStatus.OK)
  async getLoggedInAccount(
    @AuthUser('_id') id: mongoose.Types.ObjectId
  ) {
    const student = await this.studentsService.findOneById(id)
    return student;
  }
}
Senior takeaway:

Keep controllers thin.
Push logic to services for reuse and testability.
5) DTO + ValidationPipe = Input Contract
You already use class-validator DTOs. Because ValidationPipe is global, request bodies are auto-validated.


login.dto.ts
Lines 3-9
export class LoginDto {
  @IsEmail()
  email: string;
  @IsString()
  @MinLength(6)
  password: string;
}
This is one of Nest’s strongest patterns:

DTO = schema for runtime validation + docs + typing discipline.
Pipe enforces it consistently across controllers.
6) Guards + Custom Decorators = Auth Pipeline
Your AuthGuard does JWT verify + token invalidation checks via Redis, then attaches user to request.
Then @AuthUser('_id') extracts fields cleanly in controllers.

AuthGuard decides access (canActivate).
AuthUser decorator avoids repetitive req.user parsing in each endpoint.
This is textbook Nest auth architecture.

7) Global Exception Filter = Unified Error Shape
You centralized error serialization and Sentry reporting in one filter.


global-exceptions.filter.ts
Lines 11-23
@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name);
  catch(exception: unknown, host: ArgumentsHost): void {
    const hostType = host.getType<'http' | 'rpc' | 'ws'>();
    if (hostType !== 'http') {
      // ...
      return;
    }
Why this matters:

Uniform client error responses.
Centralized observability policy.
Cleaner services/controllers (they just throw exceptions).
8) Data Layer Pattern: Generic CRUD + Domain Extensions
CrudService provides reusable DB primitives; feature services extend it and add domain logic.

Base methods: create/find/update/delete + paginated fetch.
StudentsService extends CrudService and adds library/reading-list/business workflows.
This is a practical compromise between reuse and flexibility.

9) Multi-Transport NestJS (REST + TCP)
BatchesController uses @MessagePattern, so Nest handles it as a microservice endpoint, not HTTP route.

This helps you learn Nest’s biggest architectural advantage: same DI/module/service model across multiple transports.

10) End-to-End Request Lifecycle (How to Think Like Nest)
For a protected REST endpoint like GET /api/v1/students/account:

Request hits route (controller method).
AuthGuard runs first (@UseGuards).
JWT verified, request.user set.
@AuthUser('_id') pulls user id into method arg.
Controller calls service.
Service talks to Mongoose model(s).
If error thrown, GlobalExceptionFilter formats response + logs/Sentry.
If you deeply understand this lifecycle, you understand Nest.

Best Learning Order in this repo
Day 1: main.ts, app.module.ts, app.controller.ts
Day 2: auth module (auth.controller.ts, auth.service.ts, auth DTOs)
Day 3: guards/auth.guard.ts + decorators/auth-user.decorator.ts
Day 4: students module (controller/service/module)
Day 5: base/crud.service.ts + pagination/filter usage
Day 6: filters/global-exceptions.filter.ts + error strategy
Day 7: batches.controller.ts and TCP patterns (@MessagePattern)
If you want, next I can do Lesson 2 as a practical workshop: we’ll design and add one small module together (/api/v1/skills) using the exact patterns this codebase expects.



# forRootAsync tells NestJS "don't connect to Mongo immediately — wait until I can resolve dependencies first."
inject: [ConfigService] asks NestJS to inject the ConfigService into the factory function.
The useFactory callback pulls app.mongo.uri from the typed config (which ultimately reads MONGO_URI from .env).
The returned { uri: '...' } is passed to Mongoose's connect() under the hood.