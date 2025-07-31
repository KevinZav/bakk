import { IProfileDatasource, IProfileDatasourceName } from "@modules/profile/domain/datasources/profile.datasource";
import { CreateProfileDto, UpdateProfileDto } from "@modules/profile/domain/dtos/profile.dto";
import { Profile } from "@modules/profile/domain/entities/profile.entity";
import { IProfileRepository } from "@modules/profile/domain/repositories/profile.repository";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class ProfileDatabaseRepository implements IProfileRepository {
  constructor(@Inject(IProfileDatasourceName) private readonly datasource: IProfileDatasource) {}

  create(username: string, profile: CreateProfileDto): Promise<Profile> {
    return this.datasource.create(username, profile);
  }

  get(username: string): Promise<Profile> {
    return this.datasource.get(username);
  }

  update(username: string, profile: UpdateProfileDto): Promise<Profile> {
    return this.datasource.update(username, profile);
  }

  remove(username: string): Promise<void> {
    return this.datasource.remove(username);
  }

  uploadAvatar(username: string, avatarUrl: string): Promise<Profile> {
    return this.datasource.uploadAvatar(username, avatarUrl);
  }
}