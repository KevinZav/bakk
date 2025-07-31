import { Profile } from "@modules/profile/domain/entities/profile.entity";
import { Profile as ProfileDb} from "@prisma/client";

export class ProfileMapper {
  public static databaseToEntity(model: ProfileDb): Profile {
    const { username, name, active, avatarUrl, bio, birthdate, gender, lastName, phoneNumber } = model;
    return new Profile(
      username,
      name,
      lastName,
      gender,
      birthdate,
      active,
      phoneNumber || '',
      avatarUrl || '',
      bio || '',
    );
  }
}