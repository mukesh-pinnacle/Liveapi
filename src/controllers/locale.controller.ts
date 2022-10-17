import { NextFunction, Request, Response } from 'express';
//import { CreateAccountDto } from '@dtos/accounts.dto';
import { LocaleDto } from '@dtos/locale.dto';
import { Locale } from '@interfaces/locale.interface';
import LocaleService from '@services/locale.service';

class LocaleController {
  public localeService = new LocaleService();
  //get All language
  public getLocale = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllLocaleData: Locale[] = await this.localeService.findAllLocale();
      //console.log("findAllLocaleData == ",JSON.stringify(findAllLocaleData));

      res.status(200).json({ data: findAllLocaleData, message: 'findAll', statusCode: 200 });
    } catch (error) {
      next(error);
    }
  };
  //get language by id
  public getLocaleById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const LocaleId: any = req.params.id;
      console.log('inside by id == ', LocaleId);

      const findOneLocaleData: Locale = await this.localeService.findLocaleById(LocaleId);

      res.status(200).json({ data: findOneLocaleData, message: 'findOne', statusCode: 200 });
    } catch (error) {
      next(error);
    }
  };
  // create language
  public createLocale = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const localeData: LocaleDto = req.body;
      console.log(localeData);

      const createlocaleData: Locale = await this.localeService.createLocale(localeData);

      res.status(201).json({ data: createlocaleData, message: 'created', statusCode: 201 });
    } catch (error) {
      next(error);
    }
  };
  //update language
  public updateLocale = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const localeId: any = req.params.id;
      const LocaleData: LocaleDto = req.body;
      console.log('inside update  == ', localeId);
      const updateLocaleData: Locale = await this.localeService.updateLocale(localeId, LocaleData);

      res.status(200).json({ data: updateLocaleData, message: 'updated', statusCode: 200 });
    } catch (error) {
      next(error);
    }
  };
  //delete language
  public deleteLocale = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const localeId: any = req.params.id;
      const deleteLocaleData: Locale = await this.localeService.deleteLocale(localeId);
      console.log(localeId);
      res.status(200).json({ data: deleteLocaleData, message: 'deleted', statusCode: 200 });
    } catch (error) {
      next(error);
    }
  };
}

export default LocaleController;
