import { Inject, Injectable } from "@nestjs/common";
import { IAuthRepository, IAuthRepositoryName } from "../repositories/auth.repository";

Injectable()
export class ChangePasswordUseCase {
  constructor(@Inject(IAuthRepositoryName) private readonly repo: IAuthRepository ) {}

  execute(username: string, newPassword: string) {
    return this.repo.changePassword(username, newPassword);
  }
}