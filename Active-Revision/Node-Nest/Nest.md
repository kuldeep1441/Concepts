# NEST JS
NestJS is a backend framework for Node.js built on top of Express/Fastify.

👉 NestJS is built around:
Object-Oriented Programming (OOP) + Dependency Injection

# 🤔 Why classes (not functions)?
1️⃣ Dependency Injection (BIGGEST reason)
Problem without classes:
const service = new UsersService(); ❌ manual
With classes:
constructor(private usersService: UsersService) {}

👉 Nest automatically injects it ✅
💡 Key idea:
Classes allow Nest to create, manage, and reuse objects

🤔 Why Nest js
# Because raw Express becomes messy at scale:
app.get(...)
app.post(...)
app.use(...)

NestJS gives:
Structure (like Java Spring Boot)
Dependency Injection
Clean modular architecture

# ⚙️ How (mental model)
Think like this:
Controller → receives request
Service → contains business logic
Module → groups everything

# 🧱 Step 1: Project Structure (VERY IMPORTANT)

After nest new app, you get:

src/
 ├── main.ts
 ├── app.module.ts
 ├── app.controller.ts
 └── app.service.ts

# 🧠 What is main.ts?
What
Entry point of your app
How
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
👉 Starts server

# 🧩 Step 2: Module (Core Building Block)
🧠 What
A module = container of related code

🤔 Why
To organize code like:
users/
auth/
jobs/

⚙️ How
@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
💡 Real thinking

👉 “This module handles everything related to users”

# 🎯 Step 3: Controller (Handles Requests)
🧠 What
Controller = handles incoming HTTP requests

🤔 Why
Separates routing from logic

⚙️ How
@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return 'All users';
  }
}

# ⚙️ Step 4: Service (Business Logic)
🧠 What
Service = where real logic lives

🤔 Why
Keep controllers clean

⚙️ How
@Injectable()
export class UsersService {
  getUsers() {
    return ['user1', 'user2'];
  }
}
🔗 Connect Controller + Service
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }
}

# 💉 Step 5: Dependency Injection (MOST IMPORTANT)
🧠 What
Nest automatically provides dependencies

=> Dependency Injection = “Don’t create things yourself, let Nest give them to you

🤔 Why
No manual new UsersService()

⚙️ How
constructor(private usersService: UsersService) {}
👉 Nest injects it
💡 Real analogy

Like:
“Hey Nest, give me UsersService when needed”

# 🔐 Step 6: Decorators (Core Magic)
🧠 What
Special functions that define behavior

Examples
Decorator	Use
@Module()	Define module
@Controller()	Define route
@Get()	GET API
@Post()	POST API
@Injectable()	Service


# 📦 Step 7: DTO (Data Transer Object -> Data Validation)
🧠 What
DTO = Data Transfer Object

🤔 Why
Validate request body for security puposes


# 🛡 Step 8: Pipes (Validation & Transformation)
🧠 What
Pipes validate input

⚙️ Example
@Param('id', ParseIntPipe) id: number


# 🔐 Step 9: Guards (Auth)
🧠 What
Guards control access

🤔 Why
Auth / Role-based access
@UseGuards(AuthGuard)
@Get('profile')
getProfile() {}

# 🔄 Step 10: Interceptors
🧠 What

Modify request/response

Use cases
Logging
Response formatting
Performance tracking

# ⚠️ Step 11: Exception Filters
🧠 What
Handle errors globally
throw new BadRequestException('Invalid input');


# 🗄 Step 12: Database (Mongoose - your case)
⚙️ Setup
MongooseModule.forRoot('mongodb://localhost:27017/db')
Schema
@Schema()
export class User {
  @Prop()
  name: string;
}

# 🔁 Step 13: Request Flow (IMPORTANT)
Client → Controller → Service → DB
                     ↓
                 Response