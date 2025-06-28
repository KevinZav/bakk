## How to add new environment variables

First we need to define that variable in `.env` of all environments and `.env.example`.

````
ENVIRONMENT=development
NODE_PORT=3000
NEW_VARIABLE=value
````
Then we have to define that variable into `config-environment.ts`:

````ts
import { registerAs } from "@nestjs/config";

export default registerAs('config', () => {
  return {
    environment: process.env.ENVIRONMENT,
    port: process.env.NODE_PORT
    newVariable: process.env.NEW_VARIABLE
  };
});
````

And finally, add validation into `environment.module.ts`:

````ts
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.ENVIRONMENT || 'development'],
      isGlobal: true,
      load: [configEnvironment],
      validationSchema: Joi.object({
        ENVIRONMENT: Joi.string().valid('development', 'test', 'production'),
        NODE_PORT: Joi.number(),
        NEW_VARIABLE: Joi.string().required()
      })
    })
  ],
  exports: [ConfigModule]
})
export class EnvironmentModule {}
````
