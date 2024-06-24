import { Test, TestingModule } from '@nestjs/testing';
import { CompliancefilesService } from './compliancefiles.service';

describe('CompliancefilesService', () => {
  let service: CompliancefilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompliancefilesService],
    }).compile();

    service = module.get<CompliancefilesService>(CompliancefilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
