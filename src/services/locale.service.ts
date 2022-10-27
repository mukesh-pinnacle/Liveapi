import { LocaleDto } from '@/dtos/locale.dto';
import { HttpException } from '@exceptions/HttpException';
import { Locale } from '@interfaces/locale.interface';
import LocaleModel from '@models/locale.model';
import { isEmpty } from '@utils/util';
import { Types } from 'mongoose';
class LocaleService {
  public localeModel = LocaleModel;
  // find All record
  public async findAllLocale(): Promise<Locale[]> {
    const locales: Locale[] = await this.localeModel.find();
    return locales;
  }
  //find by id
  public async findLocaleById(Localelng_Id: string): Promise<Locale> {
    if (isEmpty(Localelng_Id)) throw new HttpException(400, 'Locale Id is empty');
    if (!Types.ObjectId.isValid(Localelng_Id)) throw new HttpException(400, 'Locale Id is invalid');
    const findLocale: Locale = await this.localeModel.findOne({ _id: Localelng_Id });
    if (!findLocale) throw new HttpException(409, "Locale doesn't exist");
    return findLocale;
  }
  //create record
  public async createLocale(localeData: LocaleDto): Promise<Locale> {
    if (isEmpty(localeData)) throw new HttpException(400, 'Locale Data is empty');
    const findLocale: Locale = await this.localeModel.findOne({ lng:{$regex : new RegExp(localeData.lng, "i") } });
    if (findLocale) throw new HttpException(409, `This name ${localeData.lng} already exists`);
    const createLocaleData: Locale = await this.localeModel.create(localeData);
    return createLocaleData;
  }
  //update record
  public async updateLocale(localeId: string, localeData: LocaleDto): Promise<Locale> {
    if (isEmpty(localeData)) throw new HttpException(400, 'language Data is empty');
    if (localeId) {
      const findLocale: Locale = await this.localeModel.findOne({ lng: localeData.lng });
      if (findLocale && findLocale._id != localeId) throw new HttpException(409, `This ${localeData.lng} already exists`);
      // find other object id which have languge
    }
    const updateLocaleById: Locale = await this.localeModel.findByIdAndUpdate({ _id: localeId }, { $set: localeData }, { new: true, runValidators: true });
    if (!updateLocaleById) throw new HttpException(409, "language doesn't exist");
    return updateLocaleById;
  }
  // deleted record
  public async deleteLocale(localeId: number): Promise<Locale> {
    console.log(localeId);
    const deleteLocaleById: Locale = await this.localeModel.updateOne({ lng_id: localeId }, { $set: { is_active: 0 } });
    //findOneAndDelete(localeId);
    if (!deleteLocaleById) throw new HttpException(409, "Lng doesn't exist");
    return deleteLocaleById;
  }

}


export default LocaleService;
