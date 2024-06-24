import { Test, TestingModule } from '@nestjs/testing';
import { CompliancecategoryController } from './compliancecategory.controller';

describe('CompliancecategoryController', () => {
  let controller: CompliancecategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompliancecategoryController],
    }).compile();

    controller = module.get<CompliancecategoryController>(CompliancecategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
