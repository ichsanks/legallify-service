import { Roles } from 'src/roles/roles.entity';

export interface JwtPayload {
  username: string;
  sub: number;
  roles: Roles[];
  company: string;
  organization: string;
}
