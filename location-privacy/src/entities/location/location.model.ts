import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IUser } from '../user/user.interface';
import { User } from '../user/user.model';

export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'real' })
  latitude: number;

  @Column({ type: 'real' })
  longitude: number;

  @ManyToOne(() => User, (user) => user.locations)
  user: IUser;
}
