import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      playground: process.env.NODE_ENV === 'development',
      introspection: true,
      driver: ApolloDriver,
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      subscriptions: {
        'graphql-ws': true,
      },
    }),
  ],
  providers: [],
  exports: [],
})
export class GraphqlModule {}
