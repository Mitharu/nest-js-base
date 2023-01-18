import { Injectable } from '@nestjs/common';
import { User } from '../repository/user.entity';

@Injectable()
export class UserService {
  getHelloUser(): string {
    return 'Hello User';
  }
  
  getUserList(): any {
    return 'Hello User';
  }
}
