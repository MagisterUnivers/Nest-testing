import { Post, Put, Get, Body, Param, Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async createUser(
    @Body('first_name') first_name: string,
    @Body('last_name') last_name: string | null,
    @Body('telegram_id') telegram_id: number,
    @Body('telegram_username') telegram_username: string | null,
    @Body('profile_picture') profile_picture: string | null,
    @Body('auth_date') auth_date: string,
    @Body('hash') hash: string
  ) {
    return this.userService.createUser(
      first_name,
      last_name,
      telegram_id,
      telegram_username,
      profile_picture,
      auth_date,
      hash
    )
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body('first_name') first_name: string,
    @Body('last_name') last_name: string | null,
    @Body('telegram_id') telegram_id: number,
    @Body('telegram_username') telegram_username: string | null,
    @Body('profile_picture') profile_picture: string | null,
    @Body('auth_date') auth_date: string,
    @Body('hash') hash: string
  ) {
    return this.userService.updateUser(
      id,
      first_name,
      last_name,
      telegram_id,
      telegram_username,
      profile_picture,
      auth_date,
      hash
    )
  }

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers()
  }

  @Get('find/:id')
  async IsUserExistById(@Param('id') id: number): Promise<boolean> {
    return this.userService.isUserExistById(id)
  }

  @Get('current/:id')
  async getUserById(@Param('id') id: number): Promise<User> {
    return this.userService.getUserById(id)
  }
}
