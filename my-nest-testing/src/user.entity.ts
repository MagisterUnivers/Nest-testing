// user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tg_users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string

  @Column()
  last_name: string | null

  @Column()
  telegram_id: number

  @Column()
  telegram_username: string | null

  @Column()
  profile_picture: string | null

  @Column()
  auth_date: string

  @Column()
  hash: string | null

  @Column({ default: true })
  isActive: boolean;
}
