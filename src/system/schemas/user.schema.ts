import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ unique: true, required: true })
  username: string;

  @Prop({ required: true })
  displayName?: string;

  @Prop({ required: true })
  avatarUrl?: string;

  @Prop([{ type: SchemaTypes.ObjectId, ref: 'Post' }])
  posts: Types.ObjectId[];
}
export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.virtual('settings', {
  ref: 'UserSetting',
  localField: '_id',
  foreignField: 'user',
});
