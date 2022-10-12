import { Router } from 'express';
import SuperAdminsController from '@controllers/super_admins.controller';
import { CreateSuperAdminDto } from '@dtos/super_admins.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class SuperAdminsRoute implements Routes {
  public path = '/super-admins';
  public router: Router = Router();
  public superAdminsController = new SuperAdminsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.superAdminsController.getSuperAdmins);
    // this.router.get(`${this.path}/:id`, this.usersController.getUserById);
    // this.router.post(`${this.path}`, validationMiddleware(CreateUserDto, 'body'), this.usersController.createUser);
    // this.router.put(`${this.path}/:id`, validationMiddleware(CreateUserDto, 'body', true), this.usersController.updateUser);
    // this.router.delete(`${this.path}/:id`, this.usersController.deleteUser);
  }
}

export default SuperAdminsRoute;
