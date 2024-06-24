import { Test, TestingModule } from '@nestjs/testing';
import { CompliancecategoryService } from './compliancecategory.service';

describe('CompliancecategoryService', () => {
  let service: CompliancecategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompliancecategoryService],
    }).compile();

    service = module.get<CompliancecategoryService>(CompliancecategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
