import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MathModule } from 'sample-library';

@Module({
  imports: [MathModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
