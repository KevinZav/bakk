import { Injectable } from "@nestjs/common";
import { CreateProfileUseCase } from "../use-cases/create-profile.usecase";
import { Profile } from "../entities/profile.entity";
import { CreateProfileDto, UpdateProfileDto } from "../dtos/profile.dto";
import { GetProfileUseCase } from "../use-cases/get-profile.usecase";
import { UpdateProfileUseCase } from "../use-cases/update.profile.usecase";
import { RemoveProfileUseCase } from "../use-cases/remove-profile.usecase";
import { UpdateAvatarProfileUseCase } from "../use-cases/update-avatar-profile.usecase";

@Injectable()
export class ProfileService {
  constructor(
    private readonly createProfileUS: CreateProfileUseCase,
    private readonly getProfileUS: GetProfileUseCase,
    private readonly updateProfileUS: UpdateProfileUseCase,
    private readonly removeProfileUS: RemoveProfileUseCase,
    private readonly updateAvatarProfileUS: UpdateAvatarProfileUseCase
  ) {}

  async create(username: string, profile: CreateProfileDto): Promise<Profile> {
    return await this.createProfileUS.execute(username, profile);
  }

  async get(username: string): Promise<Profile> {
    return await this.getProfileUS.execute(username);
  }

  async update(username: string, payload: UpdateProfileDto): Promise<Profile> {
    return await this.updateProfileUS.execute(username, payload);
  }

  async remove(username: string): Promise<void> {
    return await this.removeProfileUS.execute(username);
  }

  async updateAvatar(file: Express.Multer.File, username: string): Promise<Profile> {
    return await this.updateAvatarProfileUS.execute(file, username);
  }
}