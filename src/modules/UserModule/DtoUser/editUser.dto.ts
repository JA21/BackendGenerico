import { PartialType } from "@nestjs/mapped-types";
import { OmitType } from "@nestjs/swagger";
import { UserDto } from "./user.dto";



export class EditUserDto extends PartialType(
    OmitType(UserDto, ['stateUser'] as const) ){

   

}