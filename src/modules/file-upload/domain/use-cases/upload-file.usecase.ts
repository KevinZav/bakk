import { Inject, Injectable } from "@nestjs/common";
import { IFileUploadRepository, IFileUploadRepositoryName } from "../repositories/file-upload.repository";

@Injectable()
export class UploadFileUseCase {
  constructor(@Inject(IFileUploadRepositoryName) private readonly repo: IFileUploadRepository) {}

  execute(file: Express.Multer.File, fileName: string) {
    return this.repo.upload(file, fileName);
  }
}