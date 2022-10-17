import { LocaleDto } from '@/dtos/locale.dto';
import { HttpException } from '@exceptions/HttpException';
import { Locale } from '@interfaces/locale.interface';
import LocaleModel from '@models/locale.model';
import { isEmpty } from '@utils/util';
class LocaleService {
  public locale = LocaleModel;
  // find All record
  public async findAllLocale(): Promise<Locale[]> {
    const locales: Locale[] = await this.locale.find();
    return locales;
  }
  //find by id
  public async findLocaleById(LocaleId: number): Promise<Locale> {
    if (isEmpty(LocaleId)) throw new HttpException(400, 'language Id is empty');
    //if (!Types.ObjectId.isValid(LocaleId)) throw new HttpException(400, 'Locale Id is invalid');

    const findLocale: Locale = await this.locale.findOne({ id: LocaleId });
    if (!findLocale) throw new HttpException(409, "language doesn't exist");

    return findLocale;
  }
  //create record
  public async createLocale(localeData: LocaleDto): Promise<Locale> {
  
    if (isEmpty(localeData)) throw new HttpException(400, 'Lng Data is empty');

    const findLocale: Locale = await this.locale.findOne({ id: localeData.id });
    if (findLocale) throw new HttpException(409, `This ID ${localeData.id} already exists`);
    
    
    const createLocaleData: Locale = await this.locale.create(localeData);

    return createLocaleData;
  }
  //update record
  public async updateLocale(localeId: number, localeData: LocaleDto): Promise<Locale> {
    if (isEmpty(localeData)) throw new HttpException(400, 'language Data is empty');
    console.log('inside update service===', localeId);
    if (localeId) {
      const findLocale: Locale = await this.locale.findOne({ id: localeId });
    }
    const updateLocaleById: Locale = await this.locale.updateOne({ id: localeId }, { $set:localeData });
    console.log(updateLocaleById);
    if (!updateLocaleById) throw new HttpException(409, "language doesn't exist");
    return updateLocaleById;
  }
  // deleted record
  public async deleteLocale(localeId: number): Promise<Locale> {
    const deleteLocaleById: Locale = await this.locale.updateOne({ id: localeId }, { $set: { is_active: 0 } });
    //findOneAndDelete(localeId);
    if (!deleteLocaleById) throw new HttpException(409, "Lng doesn't exist");
    return deleteLocaleById;
  }
}
export default LocaleService;
