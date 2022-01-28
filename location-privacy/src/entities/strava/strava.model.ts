import { Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IUser } from '../user/user.interface';
import { User } from '../user/user.model';

export class Strava {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clientId: string;

  @Column()
  clientSecret: string;

  @Column()
  refresh_token: string;

  @JoinColumn()
  @OneToOne(() => User, (user) => user.stravaInfo)
  user: IUser;
}
