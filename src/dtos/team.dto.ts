import { IsString, IsNumber, IsDateString, IsBoolean, IsObject } from 'class-validator';
import { ObjectId } from 'mongoose';

export class TeamDto {
    @IsString()
    public account_id: ObjectId;
    @IsNumber()
    public is_active: Number;

    @IsString()
    public name: string;

    @IsString()
    public description: string;

    @IsNumber()
    public allow_auto_assign: number

    @IsDateString()
    public created_at: Date;
    public updated_at: Date;

}
