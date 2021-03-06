import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn']
  });

  const options = new DocumentBuilder()
    .setTitle('Price Converter API')
    .setDescription('This application return\'s informations about a price converter')
    .setVersion('1.0')
    .setContact('Rafael Honório', 'https://rafael-hs.github.io/rafahs/#/', 'rafael.contatotrab@gmail.com')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
