@Injectable()
export class StudentsV3Service extends CrudService {
  constructor(
    @InjectModel(Student.name, ConnectionName.DIGICAMPUS)
    private readonly studentModel: Model<StudentDocument>,
    private readonly noticesService: NoticesService,   
    @InjectModel(StudentEnrollment.name, ConnectionName.DIGICAMPUS)
    private readonly studentEnrollmentModel: Model<StudentEnrollmentDocument>,
    @InjectModel('Subject', ConnectionName.ADMIN)
    private readonly subjectModel: Model<SubjectDocument>,    private readonly sessionsV3Service: SessionsV3Service,    
    @InjectModel('SubjectTemplate', ConnectionName.ADMIN)
    private readonly subjectTemplateModel: Model<SubjectTemplateDocument>,
    @InjectModel('Term', ConnectionName.ADMIN)
    private readonly termModel: Model<TermDocument>,
    @InjectModel('TermSectionConfiguration', ConnectionName.DIGICAMPUS)
    private readonly termSectionConfigurationModel: Model<TermSectionConfigurationDocument>,
    @InjectModel('CampusNotebook', ConnectionName.DIGICAMPUS)
    private readonly campusNotebookModel: Model<CampusNotebookDocument>,
    @InjectModel(Batch.name, ConnectionName.PEOPLESUITE)
    private readonly batchModel: Model<BatchDocument>,
  ) {
    super(studentModel);
  }


# When app starts:
Nest scans all @Injectable() classes
Creates instances (singletons)
Stores them in a container
Injects them where needed


# NestJS Dependency Injection & Module System (Deep Dive)

---

## 1. Dependency Injection in NestJS

### What

Dependency Injection (DI) is a design pattern where:

> A class does not create its dependencies itself — NestJS provides them.

---

### Why

* Avoid manual object creation
* Enable loose coupling
* Improve testability
* Centralize dependency management

---

### How it works

When the application starts:

1. Nest scans all classes marked with `@Injectable()`
2. Registers them in a **DI Container**
3. Resolves dependencies based on constructor parameters
4. Injects required instances automatically

---

## 2. Service Example Breakdown

```ts
@Injectable()
export class StudentsV3Service extends CrudService {
  constructor(
    @InjectModel(Student.name, ConnectionName.DIGICAMPUS)
    private readonly studentModel: Model<StudentDocument>,

    private readonly noticesService: NoticesService,

    @InjectModel(StudentEnrollment.name, ConnectionName.DIGICAMPUS)
    private readonly studentEnrollmentModel: Model<StudentEnrollmentDocument>,

    @InjectModel('Subject', ConnectionName.ADMIN)
    private readonly subjectModel: Model<SubjectDocument>,

    private readonly sessionsV3Service: SessionsV3Service,

    @InjectModel('SubjectTemplate', ConnectionName.ADMIN)
    private readonly subjectTemplateModel: Model<SubjectTemplateDocument>,

    @InjectModel('Term', ConnectionName.ADMIN)
    private readonly termModel: Model<TermDocument>,

    @InjectModel('TermSectionConfiguration', ConnectionName.DIGICAMPUS)
    private readonly termSectionConfigurationModel: Model<TermSectionConfigurationDocument>,

    @InjectModel('CampusNotebook', ConnectionName.DIGICAMPUS)
    private readonly campusNotebookModel: Model<CampusNotebookDocument>,

    @InjectModel(Batch.name, ConnectionName.PEOPLESUITE)
    private readonly batchModel: Model<BatchDocument>,
  ) {
    super(studentModel);
  }
}
```

---

### Key Concepts

#### `@Injectable()`

Marks the class as a **provider** so Nest can manage it in the DI container.

---

#### Constructor Injection

Dependencies are declared in the constructor and automatically injected by NestJS.

---

#### `@InjectModel()`

Used to inject **Mongoose models**.

Equivalent to:

> “Give me this model from this database connection”

---

#### Multiple Database Connections

```ts
ConnectionName.DIGICAMPUS
ConnectionName.ADMIN
ConnectionName.PEOPLESUITE
```

Allows:

* Separation of data
* Multi-tenant or domain-based architecture

---

#### Extending Base Service

```ts
extends CrudService
```

* Reuses common CRUD operations
* Reduces duplication
* Promotes abstraction

---

## 3. Module System in NestJS

---

### What is a Module?

A module is a **container** that groups:

* Services
* Controllers
* Providers
* External dependencies

---

### Example

```ts
@Module({
  imports: [...],
  controllers: [...],
  providers: [...],
  exports: [...]
})
export class StudentsModule {}
```

---

## 4. Module Breakdown

---

### 4.1 `imports`

```ts
imports: [
  MongooseModule.forFeature([...], ConnectionName.DIGICAMPUS),
  NoticesModule,
  FilesModule,
  forwardRef(() => SessionsModule)
]
```

#### Purpose:

* Bring external modules and providers into current module

---

### 4.2 `MongooseModule.forFeature()`

Registers MongoDB models in the DI system.

```ts
MongooseModule.forFeature([
  { name: 'Student', schema: StudentSchema }
], ConnectionName.DIGICAMPUS)
```

#### Internally:

Creates a provider like:

```ts
{
  provide: 'StudentModel',
  useValue: mongoose.model(...)
}
```

---

### 4.3 `providers`

```ts
providers: [StudentsService, StudentsV3Service]
```

Registers services in DI container.

---

### 4.4 `controllers`

```ts
controllers: [StudentsController, StudentsV3Controller]
```

Defines API entry points.

---

### 4.5 `exports`

```ts
exports: [StudentsService, StudentsV3Service]
```

Makes services available to other modules.

---

### 4.6 `forwardRef()`

```ts
forwardRef(() => SessionsModule)
```

Used to resolve **circular dependencies**.

---

## 5. Service vs Module (Key Difference)

| Aspect         | Service           | Module                |
| -------------- | ----------------- | --------------------- |
| Role           | Executes logic    | Provides dependencies |
| Responsibility | Business logic    | Configuration         |
| Uses DI        | Yes               | Registers DI          |
| Example        | StudentsV3Service | StudentsModule        |

---

## 6. Complete Flow

```text
Module registers:
  - Models (MongooseModule.forFeature)
  - Services (providers)
  - Controllers

↓
Nest builds DI container

↓
Service requests dependencies via constructor

↓
Container resolves and injects them

↓
Application runs
```

---

## 7. Key Takeaways

* `@Injectable()` → makes class injectable
* `@Module()` → defines dependency scope
* `forFeature()` → registers models
* `providers` → makes services available
* `exports` → shares services across modules
* `imports` → consumes other modules

---

## 8. Mental Model

```text
Module = Configuration Layer
Service = Execution Layer
DI Container = Dependency Manager
```

---
