import { LoginDto } from '@modules/auth/domain/dtos/login.dto';
import { SignDto } from '@modules/auth/domain/dtos/sign.dto';
import { User } from '@modules/auth/domain/entities/user.entity';
import { IAuthRepository } from '@modules/auth/domain/repositories/auth.repository';
import {
  IEncrytionService,
  IEncrytionServiceName,
} from '@modules/auth/domain/services/encryption/encryption.service';
import { Inject, Injectable } from '@nestjs/common';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';

@Injectable()
export class AuthMemoryRepository implements IAuthRepository {
  constructor(
    @Inject(IEncrytionServiceName)
    private readonly encryptionService: IEncrytionService,
  ) {}

  private users: User[] = [];

  async getAll(): Promise<User[]> {
    return this.users;
  }

  async getOneByUsername(username: string): Promise<User> {
    const user = this.users.find((item) => item.username === username);

    if (!user) {
      throw new HttpErrorByCode[400]('User not found');
    }

    return user;
  }

  async login(dto: LoginDto): Promise<User> {
    const user = await this.verify(dto.username, dto.password);

    if (!user) {
      throw new HttpErrorByCode[403]('Username or password wrong');
    }

    return user;
  }

  async verify(username: string, password: string) {
    const user = await this.getOneByUsername(username);
    const isMatch = await this.encryptionService.compare(password, user.password);

    if (isMatch) return user;

    return null;
  }

  async sign(dto: SignDto): Promise<User> {
    const passwordEncrypt = await this.encryptionService.hash(dto.password);
    const newUser = new User(
      dto.username,
      passwordEncrypt,
    );
    this.users.push(newUser);
    return newUser;
  }

  async changePassword(username: string, newPassword: string): Promise<void> {
    const user = await this.getOneByUsername(username);

    user.password = newPassword;
  }
}
