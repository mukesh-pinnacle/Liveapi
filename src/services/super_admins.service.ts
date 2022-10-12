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

    //   public async findUserById(userId: string): Promise<User> {
    //     if (isEmpty(userId)) throw new HttpException(400, 'UserId is empty');

    //     const findUser: User = await this.users.findOne({ _id: userId });
    //     if (!findUser) throw new HttpException(409, "User doesn't exist");

    //     return findUser;
    //   }

    //   public async createUser(userData: CreateUserDto): Promise<User> {
    //     if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    //     const findUser: User = await this.users.findOne({ email: userData.email });
    //     if (findUser) throw new HttpException(409, `This email ${userData.email} already exists`);

    //     const hashedPassword = await hash(userData.password, 10);
    //     const createUserData: User = await this.users.create({ ...userData, password: hashedPassword });

    //     return createUserData;
    //   }

    //   public async updateUser(userId: string, userData: CreateUserDto): Promise<User> {
    //     if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    //     if (userData.email) {
    //       const findUser: User = await this.users.findOne({ email: userData.email });
    //       if (findUser && findUser._id != userId) throw new HttpException(409, `This email ${userData.email} already exists`);
    //     }

    //     if (userData.password) {
    //       const hashedPassword = await hash(userData.password, 10);
    //       userData = { ...userData, password: hashedPassword };
    //     }

    //     const updateUserById: User = await this.users.findByIdAndUpdate(userId, { $set: userData });
    //     if (!updateUserById) throw new HttpException(409, "User doesn't exist");

    //     return updateUserById;
    //   }

    //   public async deleteUser(userId: string): Promise<User> {
    //     const deleteUserById: User = await this.users.findByIdAndDelete(userId);
    //     if (!deleteUserById) throw new HttpException(409, "User doesn't exist");

    //     return deleteUserById;
    //   }
}

export default SuperAdminService;