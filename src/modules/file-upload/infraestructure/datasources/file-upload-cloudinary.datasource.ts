import { IFileUploadDatasource } from '@modules/file-upload/domain/datasources/file-upload.datasource';
import { IFileUpload } from '@modules/file-upload/domain/models/file-upload.model';
import { Injectable } from '@nestjs/common';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { v2 as cloudinary } from 'cloudinary';
import * as streamifier from 'streamifier';

@Injectable()
export class FileUploadCloudinaryDatasource implements IFileUploadDatasource {
  constructor() {}

  async upload(
    file: Express.Multer.File,
    folderName: string,
  ): Promise<IFileUpload> {
    return new Promise((resolve, _) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: folderName },
        (error, result) => {
          if (error) {
            throw new HttpErrorByCode[400](error);
          }

          resolve({
            url: result?.secure_url || '',
          });
        },
      );

      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
  }
}
