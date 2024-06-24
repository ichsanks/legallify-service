import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CompaniesService } from 'src/companies/companies.service';
import { OrganizationsService } from 'src/organizations/organizations.service';
import { RolesService } from 'src/roles/roles.service';
import { registerUserDto } from 'src/users/users.dto';
import { DataSource } from 'typeorm';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private readonly companiesService: CompaniesService,
    private readonly organizationsService: OrganizationsService,
    private readonly rolesService: RolesService,
    private readonly userService: UsersService,
    private readonly dataSource: DataSource,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    if (user && user.password === pass) {
      return this.usersService.toUserDto(user);
    }
    return null;
  }

  async login(user: any) {
    console.log({ user });
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(payload: registerUserDto): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const { company, country, address, ...user } = payload;
      const companyData = {
        name: company,
        pic: user.fullname,
        pic_number: user.phone,
        address,
        country,
      };

      const { id: company_id } =
        await this.companiesService.createWithinTransaction(
          queryRunner,
          companyData,
        );

      const organizationData = {
        name: company,
        address,
        company_id,
      };
      const { id: organization_id } =
        await this.organizationsService.createWithinTransaction(
          queryRunner,
          organizationData,
        );

      const defaultRole = await this.rolesService.findByName('admin');
      if (!defaultRole) {
        throw new InternalServerErrorException('Default role not found');
      }

      const userData = {
        ...user,
        company_id,
        organization_id,
        roles: [defaultRole],
      };
      await this.userService.createWithinTransaction(queryRunner, userData);

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
