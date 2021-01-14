import { Module } from '@nestjs/common';

import {UserService} from './user.service';
import {UserController} from './user.controller'
import { TypeOrmModule } from '@nestjs/typeorm';
import {userEntity} from '../../entities'
@Module({
    imports:[
        TypeOrmModule.forFeature([userEntity])
    ],
    controllers:[UserController],
    providers:[UserService]
})
export class UserModule {}
