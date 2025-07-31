import { TokenGuard } from '@modules/auth/domain/guards/token.guard';
import { UserJwt } from '@modules/auth/domain/interfaces/user-jwt.interface';
import { ImageFile } from '@modules/file-upload/domain/decorators/image-file.decorator';
import { CreateProfileDto, UpdateProfileDto } from '@modules/profile/domain/dtos/profile.dto';
import { ProfileService } from '@modules/profile/domain/services/profile.service';
import { Body, Controller, Delete, Get, Inject, Post, Put, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('profile')
export class ProfileController {
  constructor(@Inject() private readonly profileService: ProfileService) {}

  @TokenGuard()
  @Get()
  getProfile(@Req() req: any) {
    const user = req.user as UserJwt;

    return this.profileService.get(user.username);
  }

  @TokenGuard()
  @Post()
  async create(@Req() req: any, @Body() payload: CreateProfileDto) {
    const user = req.user as UserJwt;

    return this.profileService.create(user.username, payload);
  }

  @TokenGuard()
  @Put()
  async update(@Req() req: any, @Body() payload: UpdateProfileDto) {
    const user = req.user as UserJwt;

    return this.profileService.update(user.username, payload);
  }

  @TokenGuard()
  @Delete()
  async remove(@Req() req: any) {
    const user = req.user as UserJwt;

    return this.profileService.remove(user.username);
  }

  @TokenGuard()
  @Put('avatar-image')
  @UseInterceptors(FileInterceptor('file'))
  async updateAvatar(@Req() req: any, @ImageFile() file: Express.Multer.File) {
    const user = req.user as UserJwt;

    return this.profileService.updateAvatar(file, user.username);
  }
}
