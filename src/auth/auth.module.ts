import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { CompaniesModule } from 'src/companies/companies.module';
import { OrganizationsModule } from 'src/organizations/organizations.module';
import { RolesModule } from 'src/roles/roles.module';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: 'yourSecretKey', // Use a secure key in production
      signOptions: { expiresIn: '60m' },
    }),
    UsersModule,
    RolesModule,
    OrganizationsModule,
    CompaniesModule,
    PassportModule.register({ session: false }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
