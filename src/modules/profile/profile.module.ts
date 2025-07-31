import { Module } from '@nestjs/common';
import { InfraestructureModule } from './infraestructure/infraestructure.module';
import { CreateProfileUseCase } from './domain/use-cases/create-profile.usecase';
import { ProfileService } from './domain/services/profile.service';
import { ProfileController } from './infraestructure/controllers/profile/profile.controller';
import { GetProfileUseCase } from './domain/use-cases/get-profile.usecase';
import { UpdateProfileUseCase } from './domain/use-cases/update.profile.usecase';
import { RemoveProfileUseCase } from './domain/use-cases/remove-profile.usecase';
import { UpdateAvatarProfileUseCase } from './domain/use-cases/update-avatar-profile.usecase';
import { FileUploadModule } from '@modules/file-upload/file-upload.module';

@Module({
  imports: [InfraestructureModule, FileUploadModule],
  providers: [
    CreateProfileUseCase,
    ProfileService,
    GetProfileUseCase,
    UpdateProfileUseCase,
    RemoveProfileUseCase,
    UpdateAvatarProfileUseCase
  ],
  controllers: [ProfileController],
})
export class ProfileModule {}
