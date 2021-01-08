import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { AppService } from './comics.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Post("/all")
    getHello(): string {
        return this.appService.getHello();
    }
    @Get("/all")
    async getAllComic() {
        return this.appService.getAllComic();
    }

    @Post()
    async createComic(@Body() body) {
        return this.appService.createComic(body);;
    }
    @Put("/:id")
    async updateComic(@Param('id') id: number) {
        return this.appService.updateComic(id);
    }
    @Delete("/:id")
    async deleteComic(@Param('id') id: number) {
        return this.appService.deleteComic(id);
    }

}
