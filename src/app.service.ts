import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'This is the Aço² API go for https://api-chain.herokuapp.com/docs/ to see the specs';
  }
}
