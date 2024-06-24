import { Test, TestingModule } from '@nestjs/testing';
import { RegulationflowfilesController } from './regulationflowfiles.controller';

describe('RegulationflowfilesController', () => {
  let controller: RegulationflowfilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegulationflowfilesController],
    }).compile();

    controller = module.get<RegulationflowfilesController>(RegulationflowfilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
