import { Model } from 'mongoose';
import { QueryService } from '@ptc-org/nestjs-query-core';
import { InjectModel } from '@nestjs/mongoose';
import { MongooseQueryService } from '@ptc-org/nestjs-query-mongoose';
import { UserSetting } from '../../schemas';

@QueryService(UserSetting)
export class UserSettingService extends MongooseQueryService<UserSetting> {
  constructor(@InjectModel(UserSetting.name) model: Model<UserSetting>) {
    super(model);
  }
}
