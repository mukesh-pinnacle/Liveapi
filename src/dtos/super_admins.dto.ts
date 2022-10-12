import { IsEmail, IsString } from 'class-validator';

export class CreateSuperAdminDto {
  @IsEmail()
  public email: string;

  @IsString()
  public encrypted_password: string;

  @IsString()
  public display_picture: String;

  @IsString()
  public name: String;

  @IsString()
  public dispaly_name: String;
}
