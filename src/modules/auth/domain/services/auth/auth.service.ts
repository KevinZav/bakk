import { Injectable } from '@nestjs/common';
import { LoginDto } from '../../dtos/login.dto';
import { User } from '../../entities/user.entity';
import { SignDto } from '../../dtos/sign.dto';
import { SignUseCase } from '../../use-cases/sign.usecase';
import { GetAllUseCase } from '../../use-cases/get-all.usecase';
import { GetOneByUsernameUseCase } from '../../use-cases/get-one-by-username.usecase';
import { LoginUseCase } from '../../use-cases/login.usecase';
import { ChangePasswordUseCase } from '../../use-cases/change-password.usecase';

@Injectable()
export class AuthService {
  constructor(
    private readonly signUS: SignUseCase,
    private readonly getAllUS: GetAllUseCase,
    private readonly getOneByUsernameUS: GetOneByUsernameUseCase,
    private readonly loginUS: LoginUseCase,
    private readonly changePasswordUS: ChangePasswordUseCase
  ) {}

  async login(dto: LoginDto): Promise<User> {
    return await this.loginUS.execute(dto);
  }

  async sign(dto: SignDto): Promise<User> {
    return await this.signUS.execute(dto);
  }

  async getAll(): Promise<User[]> {
    return await this.getAllUS.execute();
  }

  async getOneByUsername(username: string): Promise<User> {
    return await this.getOneByUsernameUS.execute(username);
  }

  async changePassword(username: string, newPassword: string) {
    return await this.changePasswordUS.execute(username, newPassword);
  }
}
