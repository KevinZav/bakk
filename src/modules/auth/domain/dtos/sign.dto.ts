import { Matches } from 'class-validator';
import {
  passwordErrorMessage,
  passwordRegex,
  usernameErrorMessage,
  usernameRegex,
} from '../constants/auth.constant';

export class SignDto {
  @Matches(usernameRegex, {
    message: usernameErrorMessage,
  })
  username: string;
  @Matches(passwordRegex, {
    message: passwordErrorMessage,
  })
  password: string;
}
