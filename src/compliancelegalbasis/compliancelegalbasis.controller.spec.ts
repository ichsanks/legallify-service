import { Test, TestingModule } from '@nestjs/testing';
import { CompliancelegalbasisController } from './compliancelegalbasis.controller';

describe('CompliancelegalbasisController', () => {
  let controller: CompliancelegalbasisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompliancelegalbasisController],
    }).compile();

    controller = module.get<CompliancelegalbasisController>(CompliancelegalbasisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
