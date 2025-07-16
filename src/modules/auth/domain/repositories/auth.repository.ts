import { LoginDto } from "../dtos/login.dto";
import { SignDto } from "../dtos/sign.dto";
import { User } from "../entities/user.entity";

export const IAuthRepositoryName = 'IAuthRepository';

export interface IAuthRepository {
  login(dto: LoginDto): Promise<User>;
  sign(dto: SignDto): Promise<User>;
  getAll(): Promise<User[]>;
  getOneByUsername(username: string): Promise<User>;
  verify(username: string, password: string): Promise<User | null>;
  changePassword(username: string, newPassword: string): Promise<void>;
}