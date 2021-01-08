import { Module } from '@nestjs/common';
import { from } from 'rxjs';
import {AppService} from './comics.service';
import {AppController} from './comisc.controller'
@Module({
    controllers:[AppController],
    providers:[AppService]
})
export class ComicsModule {}
