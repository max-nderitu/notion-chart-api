import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import DummyDatabase from './interfaces/DummyDatabase';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/database/:id')
  getDatabase(@Req() req: Request): DummyDatabase {
    return this.appService.getDatabase(req.params.id);
  }
}
