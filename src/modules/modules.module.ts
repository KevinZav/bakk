import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { FileUploadModule } from './file-upload/file-upload.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [AuthModule, FileUploadModule, ProfileModule],
})
export class ModulesModule {}
