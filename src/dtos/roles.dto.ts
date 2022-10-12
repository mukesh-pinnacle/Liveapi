import { IsString, IsArray } from 'class-validator';

class Privilege {
    @IsString()
    public module: string

    @IsArray()
    public actions: string[];
}

export class CreateRoleDto {
    @IsString()
    public name: string;

    @IsArray()
    public privileges: Privilege[];
}
