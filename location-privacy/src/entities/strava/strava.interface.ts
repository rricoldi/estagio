import { IUser } from '../user/user.interface';

export interface IStrava {
  id: number;
  clientId: string;
  clientSecret: string;
  refresh_token: string;
  user: IUser;
}
