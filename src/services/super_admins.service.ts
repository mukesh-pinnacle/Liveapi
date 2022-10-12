import { hash } from 'bcrypt';
import { CreateSuperAdminDto } from '@dtos/super_admins.dto';
import { HttpException } from '@exceptions/HttpException';
import { SuperAdmin } from '@interfaces/super_admins.interface';
import SuperAdminModel from '@models/super_admins.model';
import { isEmpty } from '@utils/util';

class SuperAdminService {
    public admins = SuperAdminModel;

    public async findAllSuperAdmin(): Promise<SuperAdmin[]> {
        const superAdmins: SuperAdmin[] = await this.admins.find();
        return superAdmins;
    }

    public async findSuperAdminById(superAdminId: string): Promise<SuperAdmin> {
        if (isEmpty(superAdminId)) throw new HttpException(400, 'SuperAdminId is empty');

        const findSuperAdmin: SuperAdmin = await this.admins.findOne({ _id: superAdminId });
        if (!findSuperAdmin) throw new HttpException(409, "SuperAdmin doesn't exist");

        return findSuperAdmin;
    }

      public async createSuperAdmin(superAdminData: CreateSuperAdminDto): Promise<SuperAdmin> {
        if (isEmpty(superAdminData)) throw new HttpException(400, 'SuperAdminData is empty');

        const findUser: SuperAdmin = await this.admins.findOne({ email: superAdminData.email });
        if (findUser) throw new HttpException(409, `This email ${superAdminData.email} already exists`);

        const hashedPassword = await hash(superAdminData.encrypted_password, 10);
        const createSuperAdminData: SuperAdmin = await this.admins.create({ ...superAdminData, encrypted_password: hashedPassword });

        return createSuperAdminData;
      }

      public async updateSuperAdmin(superAdminId: string, superAdminData: CreateSuperAdminDto): Promise<SuperAdmin> {
        if (isEmpty(superAdminData)) throw new HttpException(400, 'superAdminData is empty');

        if (superAdminData.email) {
          const findSuperAdmin: SuperAdmin = await this.admins.findOne({ email: superAdminData.email });
          if (findSuperAdmin && findSuperAdmin._id != superAdminId) throw new HttpException(409, `This email ${superAdminData.email} already exists`);
        }

        if (superAdminData.encrypted_password) {
          const hashedPassword = await hash(superAdminData.encrypted_password, 10);
          superAdminData = { ...superAdminData, encrypted_password: hashedPassword };
        }

        const updateSuperAdminById: SuperAdmin = await this.admins.findByIdAndUpdate(superAdminId, { $set: superAdminData });
        if (!updateSuperAdminById) throw new HttpException(409, "SuperAdmin doesn't exist");

        return updateSuperAdminById;
      }

       public async deleteSuperAdmin(superAdminId: string): Promise<SuperAdmin> {
         const deleteSuperAdminById: SuperAdmin = await this.admins.findByIdAndDelete(superAdminId);
         if (!deleteSuperAdminById) throw new HttpException(409, "SuperAdmin doesn't exist");

         return deleteSuperAdminById;
       }
}

export default SuperAdminService;