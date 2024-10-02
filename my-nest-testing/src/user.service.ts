// user.service.ts
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

  async createUser(name: string, email: string): Promise<User> {
    const newUser = this.usersRepository.create({ name, email })
    return this.usersRepository.save(newUser);
  }

  async updateUser(id: number, name: string, email: string): Promise<User> {
    await this.usersRepository.update(id, { name, email });
    return this.usersRepository.findOneBy({ id });
  }

  async getAllUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
