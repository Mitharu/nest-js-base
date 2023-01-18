import { Module } from '@nestjs/common';
import { UserModule } from './module/user.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule
  ],
})

export class AppModule {}