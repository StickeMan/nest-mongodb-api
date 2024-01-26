import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config, { ConfigEnum } from './common/config';
import { DatabaseModule } from './common/database/database.module';
import { GraphqlModule } from './common/graphql/graphql.module';
import { CommonModule } from './common/common.module';
import { SystemModule } from './system/system.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      envFilePath: `${process.env.NODE_ENV}.env`,
    }),
    DatabaseModule,
    GraphqlModule,
    CommonModule,
    SystemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  public static PORT: number;
  public static HOST: string;
  public static PROTOCOL: string;

  constructor(private readonly _config: ConfigService) {
    AppModule.PORT = this._config.get<number>(ConfigEnum.APP_PORT);
    AppModule.HOST = this._config.get<string>(ConfigEnum.APP_HOST);
    AppModule.PROTOCOL = this._config.get<string>(ConfigEnum.APP_HTTP_PROTOCOL);
  }
}
