import { Controller, Get, Header } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { SkipWrap } from 'src/common/decorators/skip-wrap.decorator';

@Controller('metrics')
export class MetricsController {
  constructor(private metrics: MetricsService) {}

  @SkipWrap()
  @Get()
  @Header('Content-Type', 'text/plain')
  getMetrics() {
    return this.metrics.getMetrics();
  }
}
