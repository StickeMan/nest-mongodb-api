import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './common/config';
import { DatabaseModule } from './common/database/database.module';
import { CommonModule } from './common/common.module';
import { SystemModule } from './system/system.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      envFilePath: `${process.env.NODE_ENV}.env`,
    }),
    DatabaseModule,
    CommonModule,
    SystemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
