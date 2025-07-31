import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { FileUploadModule } from './file-upload/file-upload.module';

@Module({
  imports: [AuthModule, FileUploadModule],
})
export class ModulesModule {}
