import { Inject, Injectable } from "@nestjs/common";
import { IProfileRepository, IProfileRepositoryName } from "../repositories/profile.repository";
import { UpdateProfileDto } from "../dtos/profile.dto";

@Injectable()
export class UpdateProfileUseCase {
  constructor(@Inject(IProfileRepositoryName) private readonly repo: IProfileRepository) {}

  execute(username: string, payload: UpdateProfileDto) {
    return this.repo.update(username, payload);
  }
}