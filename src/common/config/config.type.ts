export type AppConfiguration = {
  host: string;
  port: number;
  http: string;
};

export type DatabaseConfiguration = {
  host: string;
  // port: number;
  username: string;
  password: string;
  database: string;
};

export type ConfigType = {
  app: AppConfiguration;
  db: DatabaseConfiguration;
};
