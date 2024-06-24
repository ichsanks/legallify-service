import { Test, TestingModule } from '@nestjs/testing';
import { RegulationflowController } from './regulationflow.controller';

describe('RegulationflowController', () => {
  let controller: RegulationflowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegulationflowController],
    }).compile();

    controller = module.get<RegulationflowController>(RegulationflowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
