import { AuthModule } from '@modules/auth/auth.module';
import { Module } from '@nestjs/common';
import { IProfileRepositoryName } from '../domain/repositories/profile.repository';
import { ProfileDatabaseRepository } from './repositories/profile-database.repository';
import { IProfileDatasourceName } from '../domain/datasources/profile.datasource';
import { ProfilePrismaDatasource } from './datasources/profile-prisma.datasource';

@Module({
  imports: [AuthModule],
  providers: [
    {
      provide: IProfileRepositoryName,
      useClass: ProfileDatabaseRepository
    },
    {
      provide: IProfileDatasourceName,
      useClass: ProfilePrismaDatasource
    }
  ],
  exports: [
    {
      provide: IProfileRepositoryName,
      useClass: ProfileDatabaseRepository
    },
    {
      provide: IProfileDatasourceName,
      useClass: ProfilePrismaDatasource
    }
  ]
})
export class InfraestructureModule {}
