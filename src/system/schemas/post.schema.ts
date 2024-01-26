import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Post extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  contents: string;
}
export const PostSchema = SchemaFactory.createForClass(Post);
PostSchema.virtual('users', {
  ref: 'User',
  localField: '_id',
  foreignField: 'posts',
});
