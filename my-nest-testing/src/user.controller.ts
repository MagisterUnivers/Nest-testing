import { Post, Put, Get, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';

export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async createUser(@Body('name') name: string, @Body('email') email: string) {
    return this.userService.createUser(name, email);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body('name') name: string,
    @Body('email') email: string,
  ) {
    return this.userService.updateUser(id, name, email);
  }

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }
}
