import { IsBoolean, IsEmpty, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { EnumToString } from "src/helpers";
import { UserCategory } from "../enums";


export class UserDto {

    @IsNotEmpty()
    @IsString()
    nameUser: string;


    @IsString()
    passwordUser: string;

    @IsBoolean()
    stateUser: boolean;

    @IsEnum(UserCategory,{
        message:`Invalid option.Valids option : ${EnumToString(UserCategory)}`
    })
    categoryUser:UserCategory;

}