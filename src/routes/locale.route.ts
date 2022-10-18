import { Router } from 'express';
import LocaleController from '@controllers/locale.controller';
import { LocaleDto } from '@dtos/locale.dto';
import { Routes } from '@interfaces/routes.interface';
import validationLocalMiddleware from '@middlewares/validate_locale.middleware';



class LocaleRoute implements Routes {
  public path = '/locale';
  public router: Router = Router();
  public localeController = new LocaleController();

  constructor() {
    this.initializeRoutes();
    console.log("hello from routes");
  }

  private initializeRoutes() {
    
    this.router.get(`${this.path}`, this.localeController.getLocale);
    this.router.get(`${this.path}/:id`, [validationLocalMiddleware(LocaleDto, 'body', true)], this.localeController.getLocaleById);
    this.router.post(`${this.path}`, validationLocalMiddleware(LocaleDto, 'body'), this.localeController.createLocale);
    this.router.put(`${this.path}/:id`, [validationLocalMiddleware(LocaleDto, 'body', true)], this.localeController.updateLocale);
    this.router.delete(`${this.path}/:id`, [validationLocalMiddleware(LocaleDto, 'body', true)], this.localeController.deleteLocale);
  }
}

export default LocaleRoute;
