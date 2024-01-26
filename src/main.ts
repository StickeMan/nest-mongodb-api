import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const logger: Logger = new Logger();

  const host = `${AppModule.PROTOCOL}://${AppModule.HOST}${
    AppModule.HOST === 'localhost' ? `:${AppModule.PORT}` : ''
  }`;

  await app.listen(AppModule.PORT);

  logger.log(`Api host run in ${host}`, 'Nest MongoDB Soft');
  logger.log(`Graphql host run in ${host}/graphql`, 'Nest MongoDB Soft');
}
bootstrap();
