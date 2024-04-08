import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';
import { PORT_APP } from './config/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const PORT = configService.get(PORT_APP);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.enableCors();
  app.setGlobalPrefix('api');

  await app.listen(PORT || 3000);
}
bootstrap();
