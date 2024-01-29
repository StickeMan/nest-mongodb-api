import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  app.setGlobalPrefix('api');

  await app.listen(AppModule.PORT);

  const logger: Logger = new Logger();

  const host = `${AppModule.HTTP}://${AppModule.HOST}`;

  logger.log(`Api host run in ${host}`, 'Nest MongoDB Soft');
  logger.log(`Graphql host run in ${host}/graphql`, 'Nest MongoDB Soft');
}
bootstrap();
