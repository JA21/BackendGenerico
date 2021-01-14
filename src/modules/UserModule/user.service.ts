import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { userEntity } from "../../entities/user.entity";
import { EditUserDto, UserDto } from "./DtoUser";


@Injectable()
export class UserService {

    constructor(
        @InjectRepository(userEntity)
        private readonly userRepository: Repository<userEntity>) { }
    // private readonly user: userEntity[] = [];

    // createUser(users: userEntity) {
    //     this.user.push(users);
    // }


    async getAllUser(): Promise<userEntity[]> {//cuando es una promesa el metodo se vuelve asincrono
        return await this.userRepository.find();
    }

    async getUserById(idUser: number) {
        const user = await this.userRepository.findOne(idUser);
        if (!user) throw new NotFoundException('User does not exist')
        return user;
    }

    async createUserOne(dtoUser: UserDto) {
        const user = await this.userRepository.create(dtoUser as any);
        return await this.userRepository.save(user)
    }
    async updateUser(idUser: number, dtoEditUser: EditUserDto) {
        const user = await this.userRepository.findOne(idUser);
        
        if (!user) throw new NotFoundException('User does not exist')
        
        const editUser = Object.assign(user, dtoEditUser);
        
        return await this.userRepository.save(editUser);
    }

    async deleteUser(idUser: number) {
        const user=await this.userRepository.findOne(idUser);
        if(!user) throw new NotFoundException('User does not exist')
       const userDelete= await this.userRepository.delete(user);
       return userDelete;
    }
}