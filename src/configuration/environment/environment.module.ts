import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configEnvironment from './config-environment';
import { environments } from './environment.type';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.ENVIRONMENT || 'development'],
      isGlobal: true,
      load: [configEnvironment],
      validationSchema: Joi.object({
        ENVIRONMENT: Joi.string().valid('development', 'test', 'production'),
        NODE_PORT: Joi.number(),
        JWT_PRIVATE_KEY: Joi.string().required(),
        JWT_PUBLIC_KEY: Joi.string().required(),
        JWT_EXPIRE_TIME: Joi.string().required(),
        DATABASE_URL: Joi.string().required(),
        CLOUDINARY_CLOUD_NAME: Joi.string().required(),
        CLOUDINARY_API_KEY: Joi.string().required(),
        CLOUDINARY_API_SECRET: Joi.string().required(),

      })
    })
  ],
  exports: [ConfigModule]
})
export class EnvironmentModule {}
