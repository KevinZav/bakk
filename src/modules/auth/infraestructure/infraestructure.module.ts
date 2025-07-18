import { Module } from '@nestjs/common';
import { IAuthRepositoryName } from '../domain/repositories/auth.repository';
import { IEncrytionServiceName } from '../domain/services/encryption/encryption.service';
import { BcryptEncryptionService } from './services/bcrypt-encryption/bcrypt-encryption.service';
import { IJwtRepositoryName } from '../domain/repositories/jwt.repository';
import { JwtAuthMainRepository } from './repositories/jwt-auth-main.repository';
import { IAuthDatasourceName } from '../domain/datasources/auth.datasource';
import { AuthPrismaDatasource } from './datasources/auth-prisma.datasource';
import { AuthDatabaseRepository } from './repositories/auth-database.repository';

@Module({
  providers: [
    {
      provide: IAuthRepositoryName,
      useClass: AuthDatabaseRepository
    },
    {
      provide: IEncrytionServiceName,
      useClass: BcryptEncryptionService
    },
    {
      provide: IJwtRepositoryName,
      useClass: JwtAuthMainRepository
    },
    {
      provide: IAuthDatasourceName,
      useClass: AuthPrismaDatasource
    }
  ],
  exports: [
    {
      provide: IAuthRepositoryName,
      useClass: AuthDatabaseRepository
    },
    {
      provide: IEncrytionServiceName,
      useClass: BcryptEncryptionService
    },
    {
      provide: IJwtRepositoryName,
      useClass: JwtAuthMainRepository
    },
    {
      provide: IAuthDatasourceName,
      useClass: AuthPrismaDatasource
    }
  ],
})
export class InfraestructureModule {}
