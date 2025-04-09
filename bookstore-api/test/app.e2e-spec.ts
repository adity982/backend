bookstore-api
├── src
│   ├── app.module.ts
│   ├── app.controller.ts
│   ├── main.ts
│   ├── auth
│   │   ├── auth.module.ts
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── strategies
│   │   │   ├── jwt.strategy.ts
│   │   │   └── local.strategy.ts
│   │   └── guards
│   │       ├── jwt-auth.guard.ts
│   │       └── local-auth.guard.ts
│   ├── books
│   │   ├── books.module.ts
│   │   ├── books.controller.ts
│   │   ├── books.service.ts
│   │   ├── dto
│   │   │   ├── create-book.dto.ts
│   │   │   └── update-book.dto.ts
│   │   └── entities
│   │       └── book.entity.ts
│   ├── users
│   │   ├── users.module.ts
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   ├── dto
│   │   │   ├── create-user.dto.ts
│   │   │   └── update-user.dto.ts
│   │   └── entities
│   │       └── user.entity.ts
│   └── shared
│       ├── constants
│       │   └── index.ts
│       └── interfaces
│           └── index.ts
├── test
│   ├── app.e2e-spec.ts
│   ├── auth.e2e-spec.ts
│   ├── books.e2e-spec.ts
│   └── users.e2e-spec.ts
├── package.json
├── nest-cli.json
├── tsconfig.json
└── README.md