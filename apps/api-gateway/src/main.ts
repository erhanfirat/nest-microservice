import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: 'users-ms',
      port: 3011,
    },
  });

  await app.startAllMicroservices();
  await app.listen(3000, '0.0.0.0');
}

bootstrap();
