import { Roles } from 'src/roles/roles.entity';

export class UsersDto {
  username: string;
  roles: Roles[]; // Add any other fields you want to expose
}

export class createUserDto {
  fullname: string;
  username: string;
  password: string;
  email: string;
  company_id: string;
  organization_id: string;
  roles: Roles[];
}

export class registerUserDto {
  fullname: string;
  username: string;
  password: string;
  email: string;
  company: string;
  phone: string;
  country: string;
  address: string;
}
