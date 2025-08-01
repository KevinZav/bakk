import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';

export const AuthErrors = {
  unauthorized: () => new HttpErrorByCode[401]('AUTH_UNAUTHORIZED'),
  notFound: () => new HttpErrorByCode[404]('AUTH_NOT_FOUND'),
  usernameInUse: () => new HttpErrorByCode[409]('AUTH_USERNAME_IN_USE'),
}