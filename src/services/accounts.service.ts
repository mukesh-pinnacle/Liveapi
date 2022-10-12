import { CreateAccountDto } from '@dtos/accounts.dto';
import { HttpException } from '@exceptions/HttpException';
import { Account } from '@interfaces/accounts.interface';
import accountsModel from '@models/accounts.model';
import { isEmpty } from '@utils/util';
import { Types } from 'mongoose';

class AccountsService {
  public accounts = accountsModel;

  public async findAllAccount(): Promise<Account[]> {
    const accounts: Account[] = await this.accounts.find();
    return accounts;
  }

  public async findAccountById(accountId: string): Promise<Account> {
    if (isEmpty(accountId)) throw new HttpException(400, 'Account Id is empty');
    if (!Types.ObjectId.isValid(accountId)) throw new HttpException(400, 'Account Id is invalid');

    const findAccount: Account = await this.accounts.findOne({ _id: accountId });
    if (!findAccount) throw new HttpException(409, "Account doesn't exist");

    return findAccount;
  }

  public async createAccount(accountData: CreateAccountDto): Promise<Account> {
    if (isEmpty(accountData)) throw new HttpException(400, 'accountData is empty');

    const findAccount: Account = await this.accounts.findOne({ name: accountData.name });
    if (findAccount) throw new HttpException(409, `This name ${accountData.name} already exists`);

    const createAccountData: Account = await this.accounts.create(accountData);

    return createAccountData;
  }

  public async updateAccount(accountId: string, accountData: CreateAccountDto): Promise<Account> {
    if (isEmpty(accountData)) throw new HttpException(400, 'accountData is empty');

    if (accountData.name) {
      const findAccount: Account = await this.accounts.findOne({ name: accountData.name });
      if (findAccount && findAccount._id.toString() != accountId) throw new HttpException(409, `This name ${accountData.name} already exists`);
    }

    const updateAccountById: Account = await this.accounts.findByIdAndUpdate(accountId, { $set: accountData });
    if (!updateAccountById) throw new HttpException(409, "Account doesn't exist");

    return updateAccountById;
  }

  public async deleteAccount(accountId: string): Promise<Account> {
    const deleteAccountById: Account = await this.accounts.findByIdAndDelete(accountId);
    if (!deleteAccountById) throw new HttpException(409, "Account doesn't exist");

    return deleteAccountById;
  }
}

export default AccountsService;
