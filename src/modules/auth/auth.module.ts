import { Module } from '@nestjs/common';
import { AuthService } from './domain/services/auth/auth.service';
import { IAuthRepositoryName } from './domain/repositories/auth.repository';
import { AuthMemoryRepository } from './infraestructure/repositories/auth-memory.repository';
import { AuthController } from './infraestructure/controllers/auth/auth.controller';
import { SignUseCase } from './domain/use-cases/sign.usecase';
import { GetOneByUsernameUseCase } from './domain/use-cases/get-one-by-username.usecase';
import { GetAllUseCase } from './domain/use-cases/get-all.usecase';
import { IEncrytionServiceName } from './domain/services/encryption/encryption.service';
import { BcryptEncryptionService } from './infraestructure/services/bcrypt-encryption/bcrypt-encryption.service';
import { LoginUseCase } from './domain/use-cases/login.usecase';

@Module({
  providers: [
    AuthService,
    SignUseCase,
    GetAllUseCase,
    GetOneByUsernameUseCase,
    LoginUseCase,
    {
      provide: IAuthRepositoryName,
      useClass: AuthMemoryRepository
    },
    {
      provide: IEncrytionServiceName,
      useClass: BcryptEncryptionService
    }
  ],
  controllers: [AuthController]
})
export class AuthModule {}
