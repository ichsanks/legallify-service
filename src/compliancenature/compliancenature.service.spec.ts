import { Test, TestingModule } from '@nestjs/testing';
import { CompliancenatureService } from './compliancenature.service';

describe('CompliancenatureService', () => {
  let service: CompliancenatureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompliancenatureService],
    }).compile();

    service = module.get<CompliancenatureService>(CompliancenatureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
