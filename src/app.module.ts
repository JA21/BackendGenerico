import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ComicsModule } from './modules/comic/comics.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {entityComic} from "./entities/comic.entity";
import {userEntity} from "./entities/user.entity";

import {UserModule} from './modules/UserModule/user.module';


@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port:5432 ,
    username: 'postgres',
    password: 'root',
    database: 'comics',
    entities: [ "dist/**/*.entity{.ts,.js}"],
    synchronize: true,
  }),ComicsModule,UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
