import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHelloUser(): string {
    return 'Hello User';
  }
}
