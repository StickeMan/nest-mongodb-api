import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

@Schema()
export class UserSetting extends Document {
  @Prop({ required: false })
  receiveNotifications?: boolean;

  @Prop({ required: false })
  receiveEmails?: boolean;

  @Prop({ required: false })
  receiveSMS?: boolean;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'User', required: true })
  user: Types.ObjectId;
}
export const UserSettingSchema = SchemaFactory.createForClass(UserSetting);
