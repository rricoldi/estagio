import { IUser } from '../user/user.interface';

export interface ILocation {
  id: number;
  latitude: number;
  longitude: number;
  user: IUser;
}
