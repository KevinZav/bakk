import { LoginDto } from '@modules/auth/domain/dtos/login.dto';
import { SignDto } from '@modules/auth/domain/dtos/sign.dto';
import { AuthService } from '@modules/auth/domain/services/auth/auth.service';
import { Body, Controller, Get, Inject, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(@Inject() private readonly authService: AuthService) {}
  
  @Post('login')
  async login(@Body() login: LoginDto) {
    return await this.authService.login(login);
  }

  @Post('sign')
  async sign(@Body() sign: SignDto) {
    return await this.authService.sign(sign);
  }

  @Get('all')
  async getAll() {
    return await this.authService.getAll();
  }

  @Get('my-information')
  async getOne() {
    return await this.authService.getOneByUsername('');
  }
}
