import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from '@app/common';

@Module({
  imports: [DatabaseModule, ConfigModule],
})
export class AppModule {}
