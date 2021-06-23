import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT ? process.env.PORT : 3231;
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('v1');
  await app.listen(port);
}
bootstrap();
