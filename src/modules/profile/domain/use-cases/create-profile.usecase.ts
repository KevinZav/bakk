import { Inject, Injectable } from "@nestjs/common";
import { IProfileRepository, IProfileRepositoryName } from "../repositories/profile.repository";
import { Profile } from "../entities/profile.entity";
import { CreateProfileDto } from "../dtos/profile.dto";

@Injectable()
export class CreateProfileUseCase {
  constructor(@Inject(IProfileRepositoryName) private readonly repo: IProfileRepository) {}

  execute(username: string, profile: CreateProfileDto) {
    return this.repo.create(username, profile);
  }
}