import { Test, TestingModule } from '@nestjs/testing';
import { ComplianceflowController } from './complianceflow.controller';

describe('ComplianceflowController', () => {
  let controller: ComplianceflowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComplianceflowController],
    }).compile();

    controller = module.get<ComplianceflowController>(ComplianceflowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
