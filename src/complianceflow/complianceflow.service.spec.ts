import { Test, TestingModule } from '@nestjs/testing';
import { ComplianceflowService } from './complianceflow.service';

describe('ComplianceflowService', () => {
  let service: ComplianceflowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComplianceflowService],
    }).compile();

    service = module.get<ComplianceflowService>(ComplianceflowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
