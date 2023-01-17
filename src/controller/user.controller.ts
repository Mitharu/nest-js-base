import { Controller, Get } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHelloUser(): string {
    return this.userService.getHelloUser();
  }
  
  @Get('helloUser')
  getHelloUser2(): string {
    return this.userService.getHelloUser();
  }
}
