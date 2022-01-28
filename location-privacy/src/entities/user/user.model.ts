import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Location } from '../location/location.model';
import { Strava } from '../strava/strava.model';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @OneToOne(() => Strava, (strava) => strava.user)
  stravaInfo: Strava;

  @OneToMany(() => Location, (location) => location.user)
  locations: Location[];

  constructor(data: Partial<User>) {
    Object.assign(this, data);
  }
}
