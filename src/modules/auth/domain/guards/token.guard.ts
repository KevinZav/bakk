import { ExecutionContext, Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthErrors } from '../errors/auth.error';

@Injectable()
class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest<TUser = any>(
    err: any,
    user: any,
    _: any,
    __: ExecutionContext,
    ___?: any,
  ): TUser {
    if (err || !user) {
      throw AuthErrors.unauthorized();
    }
    return user;
  }
}

export const TokenGuard = () => UseGuards(JwtAuthGuard);
