import { Module } from '@nestjs/common';
import { providerConnection } from './database.provider';

@Module({
  imports: [providerConnection],
  exports: [providerConnection],
})
export class DatabaseModule {}
