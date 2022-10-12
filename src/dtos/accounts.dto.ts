import { IsString, IsNumber, IsObject } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  public name: string;

  @IsString()
  public domain: String;

  @IsString()
  public support_email: String;

  // @IsDate()
  // public created_at: Date;
  // public updated_at: Date;

  @IsNumber()
  public locale: Number;

  @IsNumber()
  public settings_flags: Number;

  @IsNumber()
  public feature_flags: Number;

  @IsNumber()
  public auto_resolve_duration: Number;

  @IsObject()
  public limits: Object;

  @IsNumber()
  public is_active: Number;
}
