import { PartialType } from "@nestjs/mapped-types";
import { IsDateString, IsOptional, IsPhoneNumber, IsString, IsUrl } from "class-validator";

export class CreateProfileDto {
  @IsString()
  name: string;

  @IsString()
  lastName: string;

  @IsString()
  gender: string;

  @IsDateString()
  birthdate: Date;

  @IsOptional()
  @IsPhoneNumber()
  phoneNumber?: string;

  @IsOptional()
  @IsUrl()
  avatarUrl?: string;

  @IsOptional()
  @IsString()
  bio?: string;
}

export class UpdateProfileDto extends PartialType(CreateProfileDto) {}
