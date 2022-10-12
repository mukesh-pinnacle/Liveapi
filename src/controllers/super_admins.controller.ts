import { NextFunction, Request, Response } from 'express';
import { CreateSuperAdminDto } from '@/dtos/super_admins.dto';
import { SuperAdmin } from '@interfaces/super_admins.interface';
import SuperAdminService from '@services/super_admins.service';

class SuperAdminsController {
  public superAdminService = new SuperAdminService();

  public getSuperAdmins = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllUsersData: SuperAdmin[] = await this.superAdminService.findAllSuperAdmin();
      res.status(200).json({ data: findAllUsersData, message: 'find All SuperAdmin Data' });
    } catch (error) {
      next(error);
    }
  };

  public getSuperAdminById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const superAdminId: string = req.params.id;
      const findOneSuperAdminData: SuperAdmin = await this.superAdminService.findSuperAdminById(superAdminId);

      res.status(200).json({ data: findOneSuperAdminData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createSuperAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const SuperAdminData: CreateSuperAdminDto = req.body;
      const createSuperAdminData: SuperAdmin = await this.superAdminService.createSuperAdmin(SuperAdminData);

      res.status(201).json({ data: createSuperAdminData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateSuperAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const superAdminId: string = req.params.id;
      const superAdminData: CreateSuperAdminDto = req.body;
      const updateSuperAdminData: SuperAdmin = await this.superAdminService.updateSuperAdmin(superAdminId, superAdminData);

      res.status(200).json({ data: updateSuperAdminData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteSuperAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const superAdminId: string = req.params.id;
      const deleteSuperAdminData: SuperAdmin = await this.superAdminService.deleteSuperAdmin(superAdminId);

      res.status(200).json({ data: deleteSuperAdminData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default SuperAdminsController;
