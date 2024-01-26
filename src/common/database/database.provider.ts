import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigEnum, DatabaseConfiguration } from '../config';

export const providerConnection = MongooseModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => {
    const databaseConfiguration = config.get<DatabaseConfiguration>(
      ConfigEnum.DB,
    );

    return {
      uri: databaseConfiguration.uri,
    } as MongooseModuleOptions;
  },
});
