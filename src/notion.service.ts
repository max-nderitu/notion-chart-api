import { Injectable } from '@nestjs/common';
import { Client } from '@notionhq/client';
import 'dotenv/config';

@Injectable()
export class NotionService {
  getClient(): Client {
    return new Client({
      auth: process.env.NOTION_TOKEN,
    });
  }
}
