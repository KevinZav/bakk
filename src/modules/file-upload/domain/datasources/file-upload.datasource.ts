import { IFileUpload } from "@modules/file-upload/domain/models/file-upload.model";

export const IFileUploadDatasourceName = 'IFileUploadDatasource';

export interface IFileUploadDatasource {
  upload(file: Express.Multer.File, folderName: string): Promise<IFileUpload>;
}