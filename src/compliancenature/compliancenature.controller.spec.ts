import { Test, TestingModule } from '@nestjs/testing';
import { CompliancenatureController } from './compliancenature.controller';

describe('CompliancenatureController', () => {
  let controller: CompliancenatureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompliancenatureController],
    }).compile();

    controller = module.get<CompliancenatureController>(CompliancenatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
