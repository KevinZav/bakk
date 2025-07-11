import { Inject, Injectable } from "@nestjs/common";
import { IAuthRepository, IAuthRepositoryName } from "../repositories/auth.repository";

@Injectable()
export class GetAllUseCase {
  constructor(@Inject(IAuthRepositoryName) private readonly repo: IAuthRepository) {}

  async execute() {
    return this.repo.getAll();
  }
}