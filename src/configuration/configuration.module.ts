import { Module } from '@nestjs/common';
import { EnvironmentModule } from './environment/environment.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [EnvironmentModule, DatabaseModule]
})
export class ConfigurationModule {}
