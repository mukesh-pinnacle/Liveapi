import { IsEmail, IsString } from 'class-validator';

export class CreateSuperAdminDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}
