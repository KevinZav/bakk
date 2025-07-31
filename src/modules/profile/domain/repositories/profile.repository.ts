import { CreateProfileDto, UpdateProfileDto } from "../dtos/profile.dto";
import { Profile } from "../entities/profile.entity";

export const IProfileRepositoryName = 'IProfileRepository';

export interface IProfileRepository {
  create(username: string, profile: CreateProfileDto): Promise<Profile>;
  get(username: string): Promise<Profile>;
  update(username: string, profile: UpdateProfileDto): Promise<Profile>;
  remove(username: string): Promise<void>;
  uploadAvatar(username: string, avatarUrl: string): Promise<Profile>;
}