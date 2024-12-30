import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from 'sample-library';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}