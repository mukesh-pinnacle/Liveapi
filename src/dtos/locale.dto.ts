import { IsString, IsNumber, IsObject } from 'class-validator';

export class LocaleDto {
    @IsNumber()
    public id: Number;

    @IsString()
    public lng: string;


    @IsNumber()
    public is_active: Number;

    // @IsDate()
    // public created_at: Date;
    // public updated_at: Date;

}
