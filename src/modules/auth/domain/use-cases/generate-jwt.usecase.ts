import { Inject, Injectable } from "@nestjs/common";
import { IJwtRepository, IJwtRepositoryName } from "../repositories/jwt.repository";
import { UserJwt } from "../interfaces/user-jwt.interface";

@Injectable()
export class GenerateJwtUseCase {
  constructor(@Inject(IJwtRepositoryName) private readonly repo: IJwtRepository) {}

  execute(payload: UserJwt) {
    return this.repo.getToken(payload);
  }
}