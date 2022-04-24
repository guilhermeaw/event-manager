import User from '@modules/users/entities/User';

export interface IUpdateUserDTO {
  id: number;
  userData: Omit<User, 'id'>;
}
