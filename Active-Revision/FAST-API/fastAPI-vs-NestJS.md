# FastAPI vs NestJS — Architecture mapping

Documentation-ready comparison for teams that **build APIs with NestJS** and need to read or write **FastAPI** (e.g. Narriva backend). Use this when onboarding, writing ADRs, or aligning code-review expectations.

**How to use:** Each subsection is one **concern**. Read **NestJS** → **FastAPI** → **Note** vertically; no wide tables.

---

## 1. Structural building blocks

### Application root

**NestJS:** `NestFactory.create(AppModule)` bootstraps a graph of modules.

**FastAPI:** `app = FastAPI()` or a factory such as `create_app()` returning `FastAPI`.

**Note:** Nest has a **formal DI container** at bootstrap; FastAPI builds an **ASGI app** and wires routes and middleware on that object.

### Bounded context / feature slice

**NestJS:** `@Module({ imports, controllers, providers, exports })`.

**FastAPI:** **No first-class “module”** — use **Python packages** (e.g. `app/api/v1/endpoints/`, `services/`, `schemas/`) and `include_router`.

**Note:** In docs: *FastAPI feature boundaries = folders + routers, not `@Module`.*

### Public API surface

**NestJS:** Controllers registered on a module.

**FastAPI:** `APIRouter` + `app.include_router(router, prefix=...)`.

**Note:** Both **compose** HTTP entry points; Nest separates module wiring from the HTTP class; FastAPI separates mount prefix from router modules.

### Route definition

**NestJS:** Class methods with `@Get()`, `@Post()`, …

**FastAPI:** Functions with `@router.get()`, `@router.post()`, …

**Note:** Nest is **class-centric**; FastAPI is **function-centric** (routers are usually plain functions on an `APIRouter`).

### Path prefix

**NestJS:** `@Controller('cats')` plus optional global prefix in `main.ts`.

**FastAPI:** `APIRouter(prefix="/cats")` plus `include_router(..., prefix="/api/v1")`.

**Note:** Same outcome: **nested URL prefixes**; two-step prefixing in FastAPI is common.

---

## 2. HTTP layer: controller vs router

### Controller role

**NestJS:** `@Controller()` class groups related handlers.

**FastAPI:** Often **one `APIRouter` per feature** (or several routers aggregated in a parent router).

**Note:** Map **one Nest controller ≈ one `APIRouter` and its route functions**.

### Handler

**NestJS:** Method on controller class.

**FastAPI:** `async def` function.

**Note:** Both should stay **thin** and delegate to services.

### Request / response types

**NestJS:** `@Body() dto`, `@Query()`, `@Param()`, `@Headers()`, …

**FastAPI:** Typed parameters: Pydantic model, `Query()`, `Path()`, `Header()`, `Cookie()`, `Request`, `Response`.

**Note:** FastAPI **infers** location from type and defaults; Nest is **more explicit** via decorators.

### Status code

**NestJS:** `@HttpCode(201)` or `@Res()`.

**FastAPI:** `status_code=201` on the route decorator, or return `JSONResponse`.

**Note:** Same for consumers of OpenAPI.

### Streaming / files

**NestJS:** Interceptors, `@Res()` passthrough.

**FastAPI:** `StreamingResponse`, `FileResponse`, uploads via `UploadFile`.

**Note:** Different APIs; same underlying HTTP capabilities.

---

## 3. DTOs, schemas, and validation

### Input contract

**NestJS:** **DTO** classes (`class-validator` + `class-transformer`).

**FastAPI:** **Pydantic** `BaseModel` (often under `schemas/`).

**Note:** Both define **shape + validation**; Pydantic is **built into** FastAPI request parsing.

### Output contract

**NestJS:** DTO / serializer, or `class-transformer` `plainToInstance`.

**FastAPI:** `response_model=SomeModel` on the route; Pydantic `model_config` / `from_attributes` for ORM rows.

**Note:** **`response_model`** filters and serializes the return value — similar goal to Nest serialization.

### Global validation

**NestJS:** `ValidationPipe` in `main.ts` / `APP_PIPE`.

**FastAPI:** Automatic for declared body, query, and path models.

**Note:** No separate “pipe” file required for basic validation in FastAPI.

### Custom rules

**NestJS:** `class-validator` decorators, custom `@ValidatorConstraint`.

**FastAPI:** Pydantic `field_validator`, `model_validator`.

**Note:** Same idea: **declarative rules on the model**.

### Transformation

**NestJS:** `class-transformer` (`@Expose`, `@Transform`).

**FastAPI:** Pydantic v2 `field_serializer`, computed fields, validators.

**Note:** Nest often splits **validate** vs **transform**; Pydantic often **combines** on one model.

---

## 4. Services and business logic

### Business logic

**NestJS:** `@Injectable()` **service** injected into controller.

**FastAPI:** Plain **classes** (e.g. `AuthService`) constructed in the handler or provided via `Depends`.

**Note:** Nest **always** injects services; some FastAPI codebases use **`svc = Service(db)`** inside the route — still valid; use `Depends` with a factory for Nest-like injection.

### Transaction boundary

**NestJS:** TypeORM `QueryRunner`, Prisma `$transaction`, or explicit service API.

**FastAPI:** `get_db()` dependency: commit/rollback scoped to the request (pattern used in Narriva).

**Note:** Document **where** commit happens; patterns vary (per-request vs explicit unit of work).

---

## 5. Dependency injection

### DI container

**NestJS:** Built-in hierarchical container (singleton, request, transient).

**FastAPI:** **`Depends(callable)`** — callable may be an **async generator** (e.g. DB session).

**Note:** FastAPI resolves a **per-request graph of callables**, not a full OOP DI container.

### Constructor injection

**NestJS:** Primary pattern.

**FastAPI:** Uncommon; **parameter injection** on route functions and nested `Depends`.

**Note:** Doc line: *`Depends` ≈ resolving Nest providers for one HTTP request.*

### Request-scoped providers

**NestJS:** `Scope.REQUEST`.

**FastAPI:** `yield` in `get_db()` or any `Depends` that yields then runs teardown.

**Note:** Same mental model: **scope = one request**.

### Config

**NestJS:** `ConfigModule` + `@Inject(ConfigService)`.

**FastAPI:** `get_settings()` with `lru_cache`, or `Depends` wrapping settings.

**Note:** Nest treats config as a **module**; FastAPI commonly uses **Pydantic Settings** as a singleton.

---

## 6. Middleware, guards, pipes, interceptors, filters

### Middleware

**NestJS:** `NestMiddleware` or Express middleware chain.

**FastAPI / Starlette:** `app.add_middleware()` (Starlette `BaseHTTPMiddleware` or ASGI middleware).

**Note:** Both run **around** the route handler; **ordering** differs (Starlette: last registered is often outermost on ingress).

### Auth / authorization

**NestJS:** **Guards** (`CanActivate`, `@UseGuards(JwtAuthGuard)`).

**FastAPI / Starlette:** **`Depends(get_current_user)`** that raises if invalid; optional role checks on a user DTO.

**Note:** Map: **`JwtAuthGuard` ≈ `Depends(get_current_user)`**.

### Validation / coercion

**NestJS:** **Pipes** (`ValidationPipe`, custom `PipeTransform`).

**FastAPI / Starlette:** Pydantic on parameters plus optional custom dependencies.

**Note:** Nest separates **pipes**; FastAPI folds much of this into **types and `Depends`**.

### Cross-cutting after handler

**NestJS:** **Interceptors** (`intercept`, `map`, logging/metrics).

**FastAPI / Starlette:** No single twin; use **middleware** timing, **dependency** wrappers, or helpers around service calls.

**Note:** *Interceptor-like behavior = middleware + structured logging or wrapper dependencies.*

### Global exception shape

**NestJS:** **Exception filters** `@Catch()`.

**FastAPI / Starlette:** `add_exception_handler(ExceptionType, handler)`.

**Note:** Narriva maps custom domain errors to a **uniform JSON envelope** — same role as a filter.

---

## 7. OpenAPI and documentation

### OpenAPI generation

**NestJS:** `@nestjs/swagger` (`@ApiTags`, `@ApiProperty`, …).

**FastAPI:** **Defaults** from types, `response_model`, `tags=` on routers.

**Note:** FastAPI often needs **fewer** decorators if models are expressive.

### Swagger UI

**NestJS:** `SwaggerModule.setup`.

**FastAPI:** `docs_url="/docs"` (often gated by `DEBUG`).

**Note:** Same **prod vs dev** documentation policy applies.

---

## 8. Testing and lifecycle

### E2E test app

**NestJS:** `Test.createTestingModule(...).compile()`.

**FastAPI:** Starlette `TestClient` or `httpx.AsyncClient(app=app, base_url=...)`.

**Note:** Different harness; same **black-box HTTP** testing idea.

### Startup / shutdown

**NestJS:** `OnModuleInit`, `OnModuleDestroy`, shutdown hooks.

**FastAPI:** **`lifespan`** context manager on `FastAPI()`.

**Note:** Map Nest lifecycle hooks to **`lifespan`** (or legacy startup/shutdown events).

---

## 9. One-line cheat sheet

Each line: **Nest term** → closest FastAPI / Starlette idea.

- **Module** → Python package + `include_router` composition  
- **Controller** → `APIRouter` + route functions  
- **Route handler** → `async def` with HTTP verb decorator  
- **DTO** → Pydantic `BaseModel` (schemas)  
- **ValidationPipe** → Automatic Pydantic validation on parameters  
- **Guard** → `Depends(...)` auth (or authorization) dependency  
- **Interceptor** → Middleware and/or dependency wrapper (no 1:1)  
- **Exception filter** → `add_exception_handler`  
- **Injectable service** → Plain class + `Depends` factory or manual construction  
- **Middleware** → `add_middleware`  
- **ConfigModule** → Pydantic `BaseSettings` / `get_settings()`

---

## 10. Architect summary (for doc intros)

- **NestJS** favors **explicit framework seams** (modules, guards, pipes, interceptors), which scales well for large teams at the cost of ceremony.
- **FastAPI** favors **minimal boilerplate** via **type hints**, **Pydantic**, and **`Depends`**, with **Starlette** supplying HTTP primitives; several Nest layers **collapse** into parameters and models.

---

*Generated for Narriva documentation. Path: `docs/fastapi-vs-nestjs-comparison.md`.*
