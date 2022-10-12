import { Router } from 'express';
import AccountsController from '@controllers/accounts.controller';
import { CreateAccountDto } from '@dtos/accounts.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import validateObjectId from '@/middlewares/validate_id.middleware';

class AccountsRoute implements Routes {
  public path = '/accounts';
  public router: Router = Router();
  public accountsController = new AccountsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.accountsController.getAccounts);
    this.router.get(`${this.path}/:id`, [validateObjectId], this.accountsController.getAccountById);
    this.router.post(`${this.path}`, validationMiddleware(CreateAccountDto, 'body'), this.accountsController.createAccount);
    this.router.put(`${this.path}/:id`, [validateObjectId, validationMiddleware(CreateAccountDto, 'body', true)], this.accountsController.updateAccount);
    this.router.delete(`${this.path}/:id`, [validateObjectId], this.accountsController.deleteAccount);
  }
}

export default AccountsRoute;
