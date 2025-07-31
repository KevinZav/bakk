import { IFileUpload } from "@modules/file-upload/domain/models/file-upload.model";

export const IFileUploadRepositoryName = 'IFileUploadRepository';

export interface IFileUploadRepository {
  upload(file: Express.Multer.File, fileName: string): Promise<IFileUpload>;
}