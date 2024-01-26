import { Module } from '@nestjs/common';
import { UserModule } from './api/user/user.module';
import { UserSettingModule } from './api/userSetting/user.settign.module';
import { PostModule } from './api/post/post.module';

@Module({
  imports: [UserModule, UserSettingModule, PostModule],
})
export class SystemModule {}
