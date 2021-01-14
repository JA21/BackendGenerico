import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { UserDto, EditUserDto } from "./DtoUser";
import { UserService } from "./user.service";


@ApiTags('User')
@Controller('user')

export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    async allUser() {
        const data = await this.userService.getAllUser();
        return {
            message: 'Petición afirmative',
            data
        }
    }

    @Get(":id")
    async getUserById(@Param('id', ParseIntPipe) idUser: number) {
        console.log(typeof idUser);
        const data = await this.userService.getUserById(idUser);
        return {
            message: 'Petición afirmative',
            data

        }
    }


    @Post("/createUser")
    async createUser(@Body() dtoUser: UserDto) {
        const data = await this.userService.createUserOne(dtoUser);
        return {
            message: 'user Create',
            data
        }
    }

    @Put('/updateUser/:id')
    updateOneUser(@Param('id', ParseIntPipe) idUser: number, @Body() dtoEdit: EditUserDto) {
        return  this.userService.updateUser(idUser, dtoEdit);
       
    }

    @Delete('/deleteUser/:id')
    deleteUser(@Param('id', ParseIntPipe) idUser: number) {
        return this.userService.deleteUser(idUser);
        
    }

}
