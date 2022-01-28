import { ILocation } from '../location/location.interface';
import { IStrava } from '../strava/strava.interface';

export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  stravaInfo: IStrava;
  locations: ILocation[];
}
