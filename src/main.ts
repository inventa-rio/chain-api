import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Aço² API')
  .setDescription('Specification for Aço² API - a c2c steel monitoring tool')
  .setVersion('1.0')
  .addTag('Company')
  .build(); 

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
