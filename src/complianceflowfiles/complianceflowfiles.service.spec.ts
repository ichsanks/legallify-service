import { Test, TestingModule } from '@nestjs/testing';
import { ComplianceflowfilesService } from './complianceflowfiles.service';

describe('ComplianceflowfilesService', () => {
  let service: ComplianceflowfilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComplianceflowfilesService],
    }).compile();

    service = module.get<ComplianceflowfilesService>(ComplianceflowfilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
