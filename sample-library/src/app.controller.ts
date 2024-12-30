import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MathService } from './math--lib-module/arithmatic-operations.service';

@Controller('test')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly mathService: MathService,
  ) {}

  @Get('get-hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('add')
  doAdd(): number {
    return this.mathService.add(2, 3);
  }

  @Get('subtract')
  doSubtract(): number {
    return this.mathService.subtract(5, 3);
  }

  @Get('multiply')
  doMultiply(): number {
    return this.mathService.multiply(2, 3);
  }

  @Get('divide')
  doDivide(): number {
    return this.mathService.divide(6, 3);
  }
}
