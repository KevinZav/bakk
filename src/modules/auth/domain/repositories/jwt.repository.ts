import { UserJwt } from "../interfaces/user-jwt.interface";

export const IJwtRepositoryName = 'IJwtRepository';

export interface IJwtRepository {
  getToken(payload: UserJwt): string;
}