import { IAuthDatasource, IAuthDatasourceName } from "@modules/auth/domain/datasources/auth.datasource";
import { LoginDto } from "@modules/auth/domain/dtos/login.dto";
import { SignDto } from "@modules/auth/domain/dtos/sign.dto";
import { User } from "@modules/auth/domain/entities/user.entity";
import { IAuthRepository } from "@modules/auth/domain/repositories/auth.repository";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class AuthDatabaseRepository implements IAuthRepository {
  constructor(@Inject(IAuthDatasourceName) private readonly datasource: IAuthDatasource) {}

  login(dto: LoginDto): Promise<User> {
    return this.datasource.login(dto);
  }

  sign(dto: SignDto): Promise<User> {
    return this.datasource.sign(dto);
  }

  getAll(): Promise<User[]> {
    return this.datasource.getAll();
  }

  getOneByUsername(username: string): Promise<User> {
    return this.datasource.getOneByUsername(username);
  }

  verify(username: string, password: string): Promise<User | null> {
    return this.datasource.verify(username, password);
  }

  changePassword(username: string, newPassword: string): Promise<void> {
    return this.datasource.changePassword(username, newPassword);
  }
}