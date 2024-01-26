import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryMongooseModule } from '@ptc-org/nestjs-query-mongoose';
import { UserService } from './user.service';
import { User, UserSchema } from '../../schemas';
import { UserDto } from '../../dtos';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryMongooseModule.forFeature([
          { document: User, name: User.name, schema: UserSchema },
        ]),
      ],
      services: [UserService],
      resolvers: [
        {
          DTOClass: UserDto,
          ServiceClass: UserService,
        },
      ],
    }),
  ],
  providers: [],
  controllers: [],
})
export class UserModule {}
