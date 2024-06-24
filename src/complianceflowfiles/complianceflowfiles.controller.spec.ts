import { Test, TestingModule } from '@nestjs/testing';
import { ComplianceflowfilesController } from './complianceflowfiles.controller';

describe('ComplianceflowfilesController', () => {
  let controller: ComplianceflowfilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComplianceflowfilesController],
    }).compile();

    controller = module.get<ComplianceflowfilesController>(ComplianceflowfilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
