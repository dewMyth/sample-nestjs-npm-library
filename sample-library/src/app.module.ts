import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathService } from './math--lib-module/arithmatic-operations.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MathService],
})
export class AppModule {}
