import { NestFactory } from '@nestjs/core';
import { UsersMsModule } from './users-ms.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UsersMsModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 3011,
      },
    },
  );
  await app.listen();
}
bootstrap();
