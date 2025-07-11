import { Inject, Injectable } from '@nestjs/common';
import { SignDto } from '../dtos/sign.dto';
import {
  IAuthRepository,
  IAuthRepositoryName,
} from '../repositories/auth.repository';
import { User } from '../entities/user.entity';

@Injectable()
export class SignUseCase {
  constructor(
    @Inject(IAuthRepositoryName) private readonly repo: IAuthRepository,
  ) {}

  execute(dto: SignDto): Promise<User> {
    return this.repo.sign(dto);
  }
}
