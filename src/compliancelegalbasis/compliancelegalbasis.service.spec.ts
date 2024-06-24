import { Test, TestingModule } from '@nestjs/testing';
import { CompliancelegalbasisService } from './compliancelegalbasis.service';

describe('CompliancelegalbasisService', () => {
  let service: CompliancelegalbasisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompliancelegalbasisService],
    }).compile();

    service = module.get<CompliancelegalbasisService>(CompliancelegalbasisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
