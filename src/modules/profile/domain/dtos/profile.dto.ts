import { PartialType } from '@nestjs/mapped-types';
import {
  IsDateString,
  IsOptional,
  IsPhoneNumber,
  Matches,
} from 'class-validator';
import {
  bioErrorMessage,
  bioRegex,
  genderErrorMessage,
  genderRegex,
  nameErrorMessage,
  nameRegex,
} from '../constants/profile.constant';

export class CreateProfileDto {
  @Matches(nameRegex, {
    message: nameErrorMessage,
  })
  name: string;

  @Matches(nameRegex, {
    message: nameErrorMessage,
  })
  lastName: string;

  @Matches(genderRegex, {
    message: genderErrorMessage,
  })
  gender: string;

  @IsDateString()
  birthdate: Date;

  @IsOptional()
  @IsPhoneNumber()
  phoneNumber?: string;

  @IsOptional()
  @Matches(bioRegex, {
    message: bioErrorMessage,
  })
  bio?: string;
}

export class UpdateProfileDto extends PartialType(CreateProfileDto) {}
