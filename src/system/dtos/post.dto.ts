import { ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  CursorConnection,
  FilterableField,
  IDField,
  KeySet,
} from '@ptc-org/nestjs-query-graphql';
import { UserDto } from './user.dto';

@InputType()
@ObjectType('Post')
@KeySet(['id'])
@CursorConnection('users', () => UserDto)
export class PostDto {
  @IDField(() => ID)
  id: string;

  @FilterableField({ nullable: true })
  title: string;

  @FilterableField({ nullable: true })
  contents: string;
}
