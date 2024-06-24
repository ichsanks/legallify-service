import { Test, TestingModule } from '@nestjs/testing';
import { CompliancetimelineService } from './compliancetimeline.service';

describe('CompliancetimelineService', () => {
  let service: CompliancetimelineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompliancetimelineService],
    }).compile();

    service = module.get<CompliancetimelineService>(CompliancetimelineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
