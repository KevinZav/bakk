import { User } from "@modules/auth/domain/entities/user.entity";
import { Auth } from "@prisma/client";

export class AuthMapper {
  public static databaseToEntity(model: Auth): User {
    return new User(model.username, model.password);
  }

  public static entityToDatabase(entity: User): any {
    return {
      username: entity.username,
      password: entity.password,
    }
  }
}