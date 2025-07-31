import { DatabaseService } from "@configuration/database/database.service";
import { IProfileDatasource } from "@modules/profile/domain/datasources/profile.datasource";
import { CreateProfileDto, UpdateProfileDto } from "@modules/profile/domain/dtos/profile.dto";
import { Profile } from "@modules/profile/domain/entities/profile.entity";
import { Injectable } from "@nestjs/common";
import { HttpErrorByCode } from "@nestjs/common/utils/http-error-by-code.util";
import { ProfileMapper } from "../mappers/profile.mapper";

@Injectable()
export class ProfilePrismaDatasource implements IProfileDatasource {
  constructor(private readonly database: DatabaseService) {}

  async create(username: string, profile: CreateProfileDto): Promise<Profile> {
    
    const profileFound =  await this.get(username).catch((e) => null);

    if(profileFound) {
      throw new HttpErrorByCode[400]('Duplicated username profile');
    }
    
    const newProfile = await this.database.profile.create({
      data: {
        ...profile,
        username
      }
    });

    return ProfileMapper.databaseToEntity(newProfile);
  }

  async get(username: string): Promise<Profile> {
    const profile = await this.database.profile.findFirst({
      where: {
        username,
        active: true
      }
    }).catch((e) => null);
    if (!profile) {
      throw new HttpErrorByCode[400]('Profile not found or inactive');
    }

    return ProfileMapper.databaseToEntity(profile);
  }

  async update(username: string, profile: UpdateProfileDto): Promise<Profile> {
    await this.get(username);

    const profileUpdated = await this.database.profile.update({
      data: {
        ...profile
      },
      where: {
        username
      }
    });

    return ProfileMapper.databaseToEntity(profileUpdated);
  }

  async remove(username: string): Promise<void> {
    await this.get(username);

    await this.database.profile.delete({
      where: {
        username
      }
    });
  }

  async uploadAvatar(username: string, avatarUrl: string): Promise<Profile> {
    await this.get(username);

    const userUpdated = await this.database.profile.update({
      data: {
        avatarUrl
      },
      where: {
        username
      }
    });

    return ProfileMapper.databaseToEntity(userUpdated);
  }
}