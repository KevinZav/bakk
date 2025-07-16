import { LoginDto } from '@modules/auth/domain/dtos/login.dto';
import { SignDto } from '@modules/auth/domain/dtos/sign.dto';
import { LoginGuard } from '@modules/auth/domain/guards/login.guard';
import { TokenGuard } from '@modules/auth/domain/guards/token.guard';
import { UserJwt } from '@modules/auth/domain/interfaces/user-jwt.interface';
import { AuthService } from '@modules/auth/domain/services/auth/auth.service';
import { JwtAuthService } from '@modules/auth/domain/services/jwt/jwt-auth.service';
import { Body, Controller, Get, Inject, Post, Req } from '@nestjs/common';
import { TokenResponseDto } from '../../dtos/token-response.dto';
import { ChangePasswordDto } from '@modules/auth/domain/dtos/change-password.dto';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject() private readonly authService: AuthService,
    @Inject() private readonly jwtAuthService: JwtAuthService
  ) {}
  
  @LoginGuard()
  @Post('login')
  login(@Body() login: LoginDto): TokenResponseDto {
    const token = this.jwtAuthService.getToken({ username: login.username });
    return { token };
  }

  @Post('sign')
  async sign(@Body() sign: SignDto): Promise<TokenResponseDto> {
    const user = await this.authService.sign(sign);
    const token = this.jwtAuthService.getToken({ username: user.username });
    return { token };
  }

  @TokenGuard()
  @Get('my-information')
  async getOne(@Req() req: any) {
    const user = req.user as UserJwt;
    return await this.authService.getOneByUsername(user.username);
  }

  @TokenGuard()
  @Post('change-password')
  async changePassword(@Req() req: any, @Body() payload: ChangePasswordDto): Promise<void> {
    const user = req.user as UserJwt;

    return await this.authService.changePassword(user.username, payload.password);
  }
}
