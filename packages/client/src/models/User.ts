export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

export interface User {
  id: number;
  name: string;
  email: string;
  cpf: string;
  role: UserRole;
}
