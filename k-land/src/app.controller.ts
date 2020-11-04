import { Controller, Get,Req, Post, Res } from '@nestjs/common';
import {AppService} from './app.service';
import { Request, Response } from 'express';


@Controller('/subcriber')
export class AppController {
  constructor(

    private appService: AppService) {}

  @Post()
  saveData(@Req() request: Request) {
    return this.appService.addEmailToDB(request.body.name,request.body.email); 
  }

  @Get()
  getData() {
    return this.appService.getData();
  }

}
