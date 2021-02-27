import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({ // Well, database credentials shouldn't be open on github, but thats life
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url:'postgres://thaqshvxmljyjn:8cf7643ea8a98ebb62694b99b654027f03eab19561b9caad5ff634131d9a1857@ec2-54-78-36-245.eu-west-1.compute.amazonaws.com:5432/daesm6pn1r120b',
      entities: [],
      synchronize: true,
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
