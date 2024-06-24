import { SetMetadata } from '@nestjs/common';
import { Roles } from './roles.entity';

export const ROLES_KEY = 'roles';
export const Rolelist = (...roles: Roles[]) => SetMetadata(ROLES_KEY, roles);
