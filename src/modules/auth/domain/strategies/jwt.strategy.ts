import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import configEnvironment from '@configuration/environment/config-environment';
import { ConfigType } from '@nestjs/config';
import { UserJwt } from '../../domain/interfaces/user-jwt.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    @Inject(configEnvironment.KEY)
    private readonly configService: ConfigType<typeof configEnvironment>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.jwt.secretKey || '',
    });
  }

  validate(payload: UserJwt) {
    return payload;
  }
}
