## Database configurations

### Configure env for database

In first configurations, is important to define DATABASE_URL env variable into .env'''

Also, before start the project, generate prisma client structure with:

````bash
npx prisma generate
````

### Generate new model
Firs, define model into schema.prisma

````prisma
model NewModel {
  id        Int       @id @default(autoincrement())
  ...fields
}
````

Then, execute the next command:

````bash
npx prisma generate
````

And also, create migrations

````bash
npx prisma migrate dev --name init
````

### Uninstall database packages

````bash
npm uninstall prisma --save-dev
npm uninstall @prisma/client
````

