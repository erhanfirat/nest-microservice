import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_MICROSERVICE') private usersMs: ClientProxy) {}

  findAll() {
    return this.usersMs.send('findAllUsers', {});
  }
}
