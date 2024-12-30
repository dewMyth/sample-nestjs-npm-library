import { Controller, Get } from '@nestjs/common';
import { AppService } from 'sample-library';

@Controller()
export class AppController {
  constructor(private readonly app: AppService) {}

  @Get()
  getHello(): string {
    return this.app.getHello();
  }
}
