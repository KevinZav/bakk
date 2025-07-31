import { IFileUploadRepository, IFileUploadRepositoryName } from "@modules/file-upload/domain/repositories/file-upload.repository";
import { Inject, Injectable } from "@nestjs/common";
import { IProfileRepository, IProfileRepositoryName } from "../repositories/profile.repository";

@Injectable()
export class UpdateAvatarProfileUseCase {
  constructor(
    @Inject(IFileUploadRepositoryName) private readonly repoFileUpload: IFileUploadRepository,
    @Inject(IProfileRepositoryName) private readonly repoProfile: IProfileRepository
  ) {}

  async execute(file: Express.Multer.File, username: string) {
    const uploadedFile = await this.repoFileUpload.upload(file, 'avatares');

    return this.repoProfile.uploadAvatar(username, uploadedFile.url);
  }
}