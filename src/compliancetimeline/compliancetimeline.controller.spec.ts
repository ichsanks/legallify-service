import { Test, TestingModule } from '@nestjs/testing';
import { CompliancetimelineController } from './compliancetimeline.controller';

describe('CompliancetimelineController', () => {
  let controller: CompliancetimelineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompliancetimelineController],
    }).compile();

    controller = module.get<CompliancetimelineController>(CompliancetimelineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
