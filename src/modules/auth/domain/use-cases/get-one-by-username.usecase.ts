import { Inject, Injectable } from "@nestjs/common";
import { IAuthRepository, IAuthRepositoryName } from "../repositories/auth.repository";
import { User } from "../entities/user.entity";

@Injectable()
export class GetOneByUsernameUseCase {
  constructor(@Inject(IAuthRepositoryName) private readonly repo: IAuthRepository) {}

  async execute(username: string): Promise<User> {
    return await this.repo.getOneByUsername(username);
  }
}