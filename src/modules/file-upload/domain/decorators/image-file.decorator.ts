import {
  ParseFilePipe,
  FileTypeValidator,
  MaxFileSizeValidator,
} from '@nestjs/common';
import { UploadedFile } from '@nestjs/common';

export function ImageFile(maxSizeMb: number = 5) {
  return UploadedFile(
    new ParseFilePipe({
      validators: [
        new FileTypeValidator({fileType:  /^image\// }),
        new MaxFileSizeValidator({ maxSize: maxSizeMb * 1024 * 1024 }),
      ]
    })
  );
}

