import { Module } from '@nestjs/common';
import { MathService } from './arithmatic-operations.service';

@Module({
  providers: [MathService], // Provide the service
  exports: [MathService], // Export the service for external use
})
export class MathModule {}
