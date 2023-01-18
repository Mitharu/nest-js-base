import { Module } from '@nestjs/common';
import { webDatabaseProviders } from './web_db.providers';

@Module({
  providers: [...webDatabaseProviders],
  exports: [...webDatabaseProviders],
})
export class DatabaseModule {}