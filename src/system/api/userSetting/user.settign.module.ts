import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryMongooseModule } from '@ptc-org/nestjs-query-mongoose';
import { UserSettingService } from './user.setting.service';
import { UserSetting, UserSettingSchema } from '../../schemas';
import { UserSettingDto } from '../../dtos';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UserSetting.name,
        schema: UserSettingSchema,
      },
    ]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryMongooseModule.forFeature([
          {
            document: UserSetting,
            name: UserSetting.name,
            schema: UserSettingSchema,
          },
        ]),
      ],
      services: [UserSettingService],
      resolvers: [
        {
          DTOClass: UserSettingDto,
          ServiceClass: UserSettingService,
        },
      ],
    }),
  ],
  providers: [],
  controllers: [],
})
export class UserSettingModule {}
