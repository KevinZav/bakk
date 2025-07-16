import { Module } from '@nestjs/common';
import { IAuthRepositoryName } from '../domain/repositories/auth.repository';
import { AuthMemoryRepository } from './repositories/auth-memory.repository';
import { IEncrytionServiceName } from '../domain/services/encryption/encryption.service';
import { BcryptEncryptionService } from './services/bcrypt-encryption/bcrypt-encryption.service';
import { IJwtRepositoryName } from '../domain/repositories/jwt.repository';
import { JwtAuthMainRepository } from './repositories/jwt-auth-main.repository';
import { AuthModule } from '../auth.module';

@Module({
  providers: [
    {
      provide: IAuthRepositoryName,
      useClass: AuthMemoryRepository
    },
    {
      provide: IEncrytionServiceName,
      useClass: BcryptEncryptionService
    },
    {
      provide: IJwtRepositoryName,
      useClass: JwtAuthMainRepository
    },
  ],
  exports: [
    {
      provide: IAuthRepositoryName,
      useClass: AuthMemoryRepository
    },
    {
      provide: IEncrytionServiceName,
      useClass: BcryptEncryptionService
    },
    {
      provide: IJwtRepositoryName,
      useClass: JwtAuthMainRepository
    },
  ],
})
export class InfraestructureModule {}
