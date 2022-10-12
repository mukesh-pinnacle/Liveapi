import { CreateRoleDto } from '@dtos/roles.dto';
import { HttpException } from '@exceptions/HttpException';
import { Role } from '@interfaces/roles.interface';
import RolesModel from '@models/roles.model';
import { isEmpty } from '@utils/util';
import { Types } from 'mongoose';

class RolesService {
  public roles = RolesModel;

  public async findAllRole(): Promise<Role[]> {
    const roles: Role[] = await this.roles.find();
    return roles;
  }

  public async findRoleById(roleId: string): Promise<Role> {
    if (isEmpty(roleId)) throw new HttpException(400, 'Role Id is empty');
    if (!Types.ObjectId.isValid(roleId)) throw new HttpException(400, 'Role Id is invalid');

    const findRole: Role = await this.roles.findOne({ _id: roleId });
    if (!findRole) throw new HttpException(409, "Role doesn't exist");

    return findRole;
  }

  public async createRole(roleData: CreateRoleDto): Promise<Role> {
    if (isEmpty(roleData)) throw new HttpException(400, 'roleData is empty');

    const findAccount: Role = await this.roles.findOne({ name: roleData.name });
    if (findAccount) throw new HttpException(409, `This name ${roleData.name} already exists`);

    const createRoleData: Role = await this.roles.create(roleData);

    return createRoleData;
  }

  public async updateRole(roleId: string, roleData: CreateRoleDto): Promise<Role> {
    if (isEmpty(roleData)) throw new HttpException(400, 'roleData is empty');

    if (roleData.name) {
      const findRole: Role = await this.roles.findOne({ name: roleData.name });
      if (findRole && findRole._id.toString() != roleId) throw new HttpException(409, `This name ${roleData.name} already exists`);
    }

    const updateRoleById: Role = await this.roles.findByIdAndUpdate(roleId, { $set: roleData });
    if (!updateRoleById) throw new HttpException(409, "Role doesn't exist");

    return updateRoleById;
  }

  public async deleteRole(roleId: string): Promise<Role> {
    const deleteRoleById: Role = await this.roles.findByIdAndDelete(roleId);
    if (!deleteRoleById) throw new HttpException(409, "Role doesn't exist");

    return deleteRoleById;
  }
}

export default RolesService;
