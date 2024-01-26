import { Model } from 'mongoose';
import { QueryService } from '@ptc-org/nestjs-query-core';
import { InjectModel } from '@nestjs/mongoose';
import { MongooseQueryService } from '@ptc-org/nestjs-query-mongoose';
import { User } from '../../schemas';

@QueryService(User)
export class UserService extends MongooseQueryService<User> {
  constructor(@InjectModel(User.name) model: Model<User>) {
    super(model);
  }
}
