import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public uid: string;

  @IsString()
  public password: string;

  @IsString()
  public provider: string;

  @IsString()
  public name: string;

  @IsString()
  public display_name: string;
}
