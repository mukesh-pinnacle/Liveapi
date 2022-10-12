import { NextFunction, Request, Response } from 'express';
import { CreateAccountDto } from '@dtos/accounts.dto';
import { Account } from '@interfaces/accounts.interface';
import AccountsService from '@services/accounts.service';

class AccountsController {
  public accountService = new AccountsService();

  public getAccounts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllAccountsData: Account[] = await this.accountService.findAllAccount();

      res.status(200).json({ data: findAllAccountsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getAccountById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const accountId: string = req.params.id;

      const findOneAccountData: Account = await this.accountService.findAccountById(accountId);

      res.status(200).json({ data: findOneAccountData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createAccount = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const accountData: CreateAccountDto = req.body;
      const createaccountData: Account = await this.accountService.createAccount(accountData);

      res.status(201).json({ data: createaccountData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateAccount = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const accountId: string = req.params.id;
      const accountData: CreateAccountDto = req.body;
      const updateAccountData: Account = await this.accountService.updateAccount(accountId, accountData);

      res.status(200).json({ data: updateAccountData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteAccount = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const accountId: string = req.params.id;
      const deleteAccountData: Account = await this.accountService.deleteAccount(accountId);

      res.status(200).json({ data: deleteAccountData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default AccountsController;
