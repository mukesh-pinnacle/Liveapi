import { IsEmail, IsString } from 'class-validator';

export class CreateAccountUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}
