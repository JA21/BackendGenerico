import { Body, Injectable, Param } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  
  async getAllComic() {
      return { name: "jaro", description: "kakdkadsksa" }
  }

 
  async createComic(@Body() body) {
      return "create acces";
  }
  
  async updateComic(@Param('id') id: number) {
      return "actualizado";
  }
  
  async deleteComic(@Param('id') id: number) {
      return "borrado";
  }

}
