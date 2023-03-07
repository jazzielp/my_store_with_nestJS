import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll() {
    return 'return FindAll from service';
  }

  findOne() {
    return 'return FindOne from service';
  }

  create() {
    return 'return create from service';
  }

  update() {
    return 'return update from service';
  }

  delete() {
    return 'return delete from service';
  }
}
