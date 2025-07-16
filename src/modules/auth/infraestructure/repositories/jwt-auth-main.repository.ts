import { UserJwt } from "@modules/auth/domain/interfaces/user-jwt.interface";
import { IJwtRepository } from "@modules/auth/domain/repositories/jwt.repository";
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JwtAuthMainRepository implements IJwtRepository {
  constructor(private readonly jwtService: JwtService) {}

  getToken(payload: UserJwt): string {
    return this.jwtService.sign(payload);
  }
}