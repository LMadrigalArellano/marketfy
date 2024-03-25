export interface User {
  userName: string;
  firstName: string;
  lastName: string;
  bio: string;
  email: string;
  password: string;
  areasOfInterest: string[];
  role: 'admin'|'user';
}