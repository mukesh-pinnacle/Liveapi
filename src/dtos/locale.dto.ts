import { IsString, IsNumber, IsDateString } from 'class-validator';

export class LocaleDto {
    @IsNumber()
    public lng_id: Number;

    @IsString()
    public lng: string;


    @IsNumber()
    public is_active: Number;

    @IsDateString()
     public created_at: Date;
     public updated_at: Date;

}
