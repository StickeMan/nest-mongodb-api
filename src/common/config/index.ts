import { ConfigType } from './config.type';
import * as process from 'process';

export * from './config.enum';
export * from './config.type';

export default (): ConfigType => ({
  db: {
    uri: process.env.MONGO_DB,
  },
});
