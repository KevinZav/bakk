import { Injectable } from "@nestjs/common";
import { UserJwt } from "../../interfaces/user-jwt.interface";
import { GenerateJwtUseCase } from "../../use-cases/generate-jwt.usecase";

export const IJwtAuthServiceName = 'IJwtAuthService';

@Injectable()
export class JwtAuthService {
  constructor(private readonly generateJwtUS: GenerateJwtUseCase) {}

  getToken(payload: UserJwt) {
    return this.generateJwtUS.execute(payload);
  }
}