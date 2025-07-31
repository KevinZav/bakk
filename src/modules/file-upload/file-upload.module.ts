import { Module } from '@nestjs/common';
import { UploadFileUseCase } from './domain/use-cases/upload-file.usecase';
import { IFileUploadDatasourceName } from './domain/datasources/file-upload.datasource';
import { FileUploadCloudinaryDatasource } from './infraestructure/datasources/file-upload-cloudinary.datasource';
import { IFileUploadRepositoryName } from './domain/repositories/file-upload.repository';
import { FileUploadCloudinaryRepository } from './infraestructure/repositories/file-upload-cloudinary.repository';
import { FILE_UPLOADER_BUCKET } from './domain/constants/file-upload.constant';
import configEnvironment from '@configuration/environment/config-environment';
import { ConfigType } from '@nestjs/config';
import { v2 as cloudinary } from 'cloudinary';

@Module({
  providers: [
    UploadFileUseCase,
    {
      provide: IFileUploadDatasourceName,
      useClass: FileUploadCloudinaryDatasource
    },
    {
      provide: IFileUploadRepositoryName,
      useClass: FileUploadCloudinaryRepository
    },
    {
      provide: FILE_UPLOADER_BUCKET,
      inject: [configEnvironment.KEY],
      useFactory: (configService: ConfigType<typeof configEnvironment>) => {
        const { apiKey, apiSecret, name } = configService.cloudinary;
        return cloudinary.config({
          cloud_name: name,
          api_key: apiKey,
          api_secret: apiSecret
        });
      }
    }
  ],
  exports: [
    {
      provide: IFileUploadRepositoryName,
      useClass: FileUploadCloudinaryRepository
    }
  ]
})
export class FileUploadModule {}
