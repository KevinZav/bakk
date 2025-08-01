import { Matches } from 'class-validator';
import {
  passwordErrorMessage,
  passwordRegex,
} from '../constants/auth.constant';

export class ChangePasswordDto {
  @Matches(passwordRegex, {
    message: passwordErrorMessage,
  })
  password: string;
}
