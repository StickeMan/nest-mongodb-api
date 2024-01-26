import { ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  Relation,
  IDField,
  KeySet,
} from '@ptc-org/nestjs-query-graphql';
import { UserDto } from './user.dto';

@InputType()
@ObjectType('UserSetting')
@KeySet(['id'])
@Relation('user', () => UserDto, { update: { enabled: true } })
export class UserSettingDto {
  @IDField(() => ID)
  id: string;

  @FilterableField({ nullable: false })
  receiveNotifications: string;

  @FilterableField({ nullable: false })
  receiveEmails: string;

  @FilterableField({ nullable: false })
  receiveSMS: string;
}
