import { IAuthDatasource } from "@modules/auth/domain/datasources/auth.datasource";
import { LoginDto } from "@modules/auth/domain/dtos/login.dto";
import { SignDto } from "@modules/auth/domain/dtos/sign.dto";
import { User } from "@modules/auth/domain/entities/user.entity";
import { Inject, Injectable } from "@nestjs/common";
import { AuthMapper } from "../mappers/auth.mapper";
import { DatabaseService } from "@configuration/database/database.service";
import { HttpErrorByCode } from "@nestjs/common/utils/http-error-by-code.util";
import { IEncrytionService, IEncrytionServiceName } from "@modules/auth/domain/services/encryption/encryption.service";

@Injectable()
export class AuthPrismaDatasource implements IAuthDatasource {
  constructor(
    private readonly database: DatabaseService,
    @Inject(IEncrytionServiceName) private readonly encryptionService: IEncrytionService
  ) {}

  async login(dto: LoginDto): Promise<User> {
    const user = await this.verify(dto.username, dto.password);

    if (!user) {
      throw new HttpErrorByCode[403]('Username or password wrong');
    }

    return user;
  }

  async sign(dto: SignDto): Promise<User> {
    const passwordEncrypt = await this.encryptionService.hash(dto.password);
    const newUser = await this.database.auth.create({
      data: {
        username: dto.username,
        password: passwordEncrypt
      }
    });

    return AuthMapper.databaseToEntity(newUser);
  }

  async getOneByUsername(username: string): Promise<User> {
    const user = await this.database.auth.findFirst({
      where: {
        username: username
      }
    });
    if (!user) {
      throw new HttpErrorByCode[400]('User not found');
    }

    return AuthMapper.databaseToEntity(user);
  }

  async verify(username: string, password: string): Promise<User | null> {
    const user = await this.getOneByUsername(username);

    const isMatch = await this.encryptionService.compare(password, user.password);

    if (isMatch) return user;

    return null
  }

  async changePassword(username: string, newPassword: string): Promise<void> {
    const passwordEncrypt = await this.encryptionService.hash(newPassword); 
    const userUpdated = await this.database.auth.update({
      where: {
        username: username
      },
      data: {
        password: passwordEncrypt
      }
    });

    if (!userUpdated) {
      throw new HttpErrorByCode[400]('User not found');
    }
  }

  getAll(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }

}