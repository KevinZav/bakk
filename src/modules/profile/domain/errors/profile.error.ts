import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';

export const ProfileErrors = {
  unauthorized: () => new HttpErrorByCode[401]('AUTH_UNAUTHORIZED'),
  notFound: () => new HttpErrorByCode[404]('PROFILE_NOT_FOUND_OR_INACTIVE'),
  usernameInUse: () => new HttpErrorByCode[409]('PROFILE_USERNAME_DUPLICATED'),
}