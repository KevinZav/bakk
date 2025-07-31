import {
  IFileUploadDatasource,
  IFileUploadDatasourceName,
} from '@modules/file-upload/domain/datasources/file-upload.datasource';
import { IFileUploadRepository } from '@modules/file-upload/domain/repositories/file-upload.repository';
import { IFileUpload } from '@modules/file-upload/domain/models/file-upload.model';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FileUploadCloudinaryRepository implements IFileUploadRepository {
  constructor(
    @Inject(IFileUploadDatasourceName)
    private readonly datasource: IFileUploadDatasource,
  ) {}
  upload(file: Express.Multer.File, fileName: string): Promise<IFileUpload> {
    return this.datasource.upload(file, fileName);
  }
}
