import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../../domain/services/auth/auth.service";
import { AuthErrors } from "../errors/auth.error";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'username',
      passwordField: 'password'
    });
  }

  async validate(username: string, password: string) {
    try {
      return await this.authService.login({username, password});
    } catch (e) {
      throw AuthErrors.unauthorized();
    }
  }
}