import { Inject, Injectable } from "@nestjs/common";
import { IProfileRepository, IProfileRepositoryName } from "../repositories/profile.repository";

@Injectable()
export class RemoveProfileUseCase {
  constructor(@Inject(IProfileRepositoryName) private readonly repo: IProfileRepository) {}

  execute(username: string) {
    return this.repo.remove(username);
  }
}