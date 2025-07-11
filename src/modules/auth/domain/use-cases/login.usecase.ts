import { Inject, Injectable } from '@nestjs/common';
import {
  IAuthRepository,
  IAuthRepositoryName,
} from '../repositories/auth.repository';
import { User } from '../entities/user.entity';
import { LoginDto } from '../dtos/login.dto';

@Injectable()
export class LoginUseCase {
  constructor(
    @Inject(IAuthRepositoryName) private readonly repo: IAuthRepository,
  ) {}

  execute(dto: LoginDto): Promise<User> {
    return this.repo.login(dto);
  }
}
