import { ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  CursorConnection,
  FilterableField,
  IDField,
  KeySet,
} from '@ptc-org/nestjs-query-graphql';
import { PostDto } from './post.dto';
import { UserSettingDto } from './user.setting.dto';

@InputType()
@ObjectType('User')
@KeySet(['id'])
@CursorConnection('posts', () => PostDto)
@CursorConnection('settings', () => UserSettingDto, {
  update: { enabled: true },
})
export class UserDto {
  @IDField(() => ID)
  id: string;

  @FilterableField({ nullable: true })
  username: string;

  @FilterableField({ nullable: true })
  displayName: string;

  @FilterableField({ nullable: true })
  avatarUrl: string;
}
