import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from '@app/common';

@Module({
  imports: [UsersModule, DatabaseModule, ConfigModule],
})
export class AppModule {}
