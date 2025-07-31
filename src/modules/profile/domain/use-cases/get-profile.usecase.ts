import { Inject, Injectable } from "@nestjs/common";
import { IProfileRepository, IProfileRepositoryName } from "../repositories/profile.repository";
import { Profile } from "../entities/profile.entity";

@Injectable()
export class GetProfileUseCase {
  constructor(@Inject(IProfileRepositoryName) private readonly repo: IProfileRepository) {}

  execute(username: string): Promise<Profile> {
    return this.repo.get(username);
  }
}