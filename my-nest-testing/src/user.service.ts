import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async createUser(first_name: string, last_name: string | null, telegram_id: number, telegram_username: string | null, profile_picture: string | null, auth_date: string, hash: string): Promise<User> {
    const isUser = await this.usersRepository.findOneBy({ telegram_id })
    if (isUser !== null) return
    const newUser = this.usersRepository.create({
      first_name,
      last_name,
      telegram_id,
      telegram_username,
      profile_picture,
      auth_date,
      hash
    })
    return this.usersRepository.save(newUser);
  }

  async updateUser(id: number, first_name: string, last_name: string | null, telegram_id: number, telegram_username: string | null, profile_picture: string | null, auth_date: string, hash: string): Promise<User> {
    await this.usersRepository.update({ telegram_id }, {
      first_name,
      last_name,
      telegram_id,
      telegram_username,
      profile_picture,
      auth_date,
      hash
    })
    return this.usersRepository.findOneBy({ telegram_id })
  }

  async getAllUsers(): Promise<User[]> {
    return this.usersRepository.find()
  }

  async getUserById(id: number): Promise<boolean> {
    const user = await this.usersRepository.findOneBy({ telegram_id: id })
    return user !== null
  }
}
