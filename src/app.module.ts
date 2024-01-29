import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config, { AppConfiguration, ConfigEnum } from "./common/config";
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
  public static HTTP: string;

  constructor(private readonly _config: ConfigService) {
    const app = this._config.get<AppConfiguration>(ConfigEnum.APP)

    AppModule.PORT = app.port;
    AppModule.HOST = app.host;
    AppModule.HTTP = app.http;
  }
}
