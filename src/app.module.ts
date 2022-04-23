import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotionService } from './notion.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, NotionService],
})
export class AppModule {}
