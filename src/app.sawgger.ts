import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";


export const initSwagger=(app:INestApplication)=>{
    const swaggerConfig=new DocumentBuilder()
    .setTitle('Example Api')
    .setDescription('Esta es una api basica con crud usuarios.',)
    .build();

    const document =SwaggerModule.createDocument(app,swaggerConfig);
    SwaggerModule.setup('/docs',app,document)

}; 