import { Func } from '@Utils/types';
import { User } from 'models/User';

export interface AuthError {
  statusCode: number;
  message: string;
}

export interface AuthContextProps {
  user: User | null;
  login: Func;
  logout: Func;
  loading: boolean;
  error: AuthError;
}
