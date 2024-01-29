import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigEnum, DatabaseConfiguration } from '../config';

export const mongodbProvider = MongooseModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => {
    const dbc = config.get<DatabaseConfiguration>(
      ConfigEnum.DB,
    );

    return {
      uri: `mongodb+srv://${dbc.username}:${dbc.password}@${dbc.host}.sko4mzi.mongodb.net/?retryWrites=true&w=majority`,
      dbName: dbc.database,
    };
  },
});
