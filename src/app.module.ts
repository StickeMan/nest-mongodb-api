import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './common/config';
import { DatabaseModule } from './common/database/database.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      envFilePath: `${process.env.NODE_ENV}.env`,
    }),
    DatabaseModule,
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
