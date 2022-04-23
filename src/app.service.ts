import { Injectable } from '@nestjs/common';
import { NotionService } from './notion.service';
import DummyDatabase from './interfaces/DummyDatabase';
import { getCurrentDate } from './utils/utis';

@Injectable()
export class AppService {
  constructor(private readonly notionService: NotionService) {}

  getDatabase(databaseId: string): DummyDatabase {
    // return await this.notionService.getClient().databases.query({
    //   database_id: databaseId,
    // });
    const database = new DummyDatabase();
    database.id = databaseId;
    database.numberOfTasks = 100;
    database.doneTasks = 40;
    database.pendingTasks = 30;
    database.notDoneTasks = 20;
    database.partiallyDoneTasks = 10;
    database.currentDate = getCurrentDate();
    database.startTimeline = getCurrentDate(-2);
    database.endTimeline = getCurrentDate(1);
    return database;
  }
}
