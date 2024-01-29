import { ConfigType } from './config.type';
import * as process from 'process';

export * from './config.enum';
export * from './config.type';

export default (): ConfigType => ({
  app: {
    host: process.env.APP_HOST,
    port: parseInt(process.env.APP_PORT, 10) || 3000,
    http: process.env.APP_HTTP,
  },
  db: {
    host: process.env.DB_HOST,
    // port: parseInt(process.env.DB_PORT, 10) || 3000,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});
