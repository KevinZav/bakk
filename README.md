## Backk Project

<p>Welcome to Backk Project - all solutions in one place</p>

## Description

This project uses NestJS. You can make and transform new ideas and develop new solutions.

## Project setup

Use Node Version Environment for install dependencies like NVM.

```bash
$ nvm use
```

Install dependencies

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Implementations

This project uses Prisma ORM for database management and Cloudinary for upload files. If you want to use new tools you should uninstall this one.

### Uninstall Prisma:

````bash
$ npm uninstall prisma --save-dev

$ npm uninstall @prisma/client
````

### Uninstall cloudinary

````bash
$ npm uninstall cloudinary multer-storage-cloudinary streamifier

$ npm uninstall --save-dev @types/streamifier
````

## Files affected

[Database Service](src/configuration/database/database.service.ts)

[Auth Mapper](src/modules/auth/infraestructure/mappers/auth.mapper.ts)

[Auth Datasource](src/modules/auth/infraestructure/datasources/auth-prisma.datasource.ts)

[Profile Mapper](src/modules/profile/infraestructure/mappers/profile.mapper.ts)

[Profile Datasource](src/modules/profile/infraestructure/datasources/profile-prisma.datasource.ts)

[Configuration Module](src/configuration/configuration.module.ts)
