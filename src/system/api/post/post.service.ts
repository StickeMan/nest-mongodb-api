import { Model } from 'mongoose';
import { QueryService } from '@ptc-org/nestjs-query-core';
import { InjectModel } from '@nestjs/mongoose';
import { MongooseQueryService } from '@ptc-org/nestjs-query-mongoose';
import { Post } from '../../schemas';

@QueryService(Post)
export class PostService extends MongooseQueryService<Post> {
  constructor(@InjectModel(Post.name) model: Model<Post>) {
    super(model);
  }
}
