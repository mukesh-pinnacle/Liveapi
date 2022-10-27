import { IsString, IsNumber, IsDateString, IsBoolean, IsObject } from 'class-validator';
import { ObjectId } from 'mongoose';

export class TeamMemberDto {
    @IsString()
    public account_user_id: ObjectId;
    @IsString()
    public team_id: ObjectId;
    @IsNumber()
    public is_active: Number;
    @IsDateString()
    public created_at: Date;
    public updated_at: Date;
}
