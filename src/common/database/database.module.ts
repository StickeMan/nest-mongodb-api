import { Module } from '@nestjs/common';
import { mongodbProvider } from './mongodb.provider';

@Module({
  imports: [mongodbProvider],
  exports: [mongodbProvider],
})
export class DatabaseModule {}
