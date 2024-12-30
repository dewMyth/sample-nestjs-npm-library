import { Controller, Get } from '@nestjs/common';
import { MathService } from 'sample-library';

@Controller()
export class AppController {
  constructor(private mathService: MathService) {}

  @Get('add')
  getAddition(): string {
    return this.mathService.add(1, 2).toString();
  }
}
