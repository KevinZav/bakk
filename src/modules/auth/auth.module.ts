import { Module } from '@nestjs/common';
import { AuthService } from './domain/services/auth/auth.service';
import { AuthController } from './infraestructure/controllers/auth/auth.controller';
import { SignUseCase } from './domain/use-cases/sign.usecase';
import { GetOneByUsernameUseCase } from './domain/use-cases/get-one-by-username.usecase';
import { GetAllUseCase } from './domain/use-cases/get-all.usecase';
import { LoginUseCase } from './domain/use-cases/login.usecase';
import { InfraestructureModule } from './infraestructure/infraestructure.module';
import { LocalStrategy } from './domain/strategies/local.strategy';
import { GenerateJwtUseCase } from './domain/use-cases/generate-jwt.usecase';
import { JwtAuthService } from './domain/services/jwt/jwt-auth.service';
import { JwtAuthModule } from './infraestructure/jwt/jwt-auth.module';
import { JwtStrategy } from './domain/strategies/jwt.strategy';
import { ChangePasswordUseCase } from './domain/use-cases/change-password.usecase';

@Module({
  providers: [
    AuthService,
    SignUseCase,
    GetAllUseCase,
    GetOneByUsernameUseCase,
    LoginUseCase,
    LocalStrategy,
    JwtStrategy,
    GenerateJwtUseCase,
    ChangePasswordUseCase,
    JwtAuthService
  ],
  controllers: [AuthController],
  imports: [
    InfraestructureModule,
    JwtAuthModule
  ],
})
export class AuthModule {}
