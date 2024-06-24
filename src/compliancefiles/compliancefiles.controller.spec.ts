import { Test, TestingModule } from '@nestjs/testing';
import { CompliancefilesController } from './compliancefiles.controller';

describe('CompliancefilesController', () => {
  let controller: CompliancefilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompliancefilesController],
    }).compile();

    controller = module.get<CompliancefilesController>(CompliancefilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
