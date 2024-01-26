import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryMongooseModule } from '@ptc-org/nestjs-query-mongoose';
import { Post, PostSchema } from '../../schemas';
import { PostDto } from '../../dtos';
import { PostService } from './post.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Post.name,
        schema: PostSchema,
      },
    ]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryMongooseModule.forFeature([
          { document: Post, name: Post.name, schema: PostSchema },
        ]),
      ],
      services: [PostService],
      resolvers: [
        {
          DTOClass: PostDto,
          ServiceClass: PostService,
        },
      ],
    }),
  ],
  providers: [],
  controllers: [],
})
export class PostModule {}
