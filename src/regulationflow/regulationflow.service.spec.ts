import { Test, TestingModule } from '@nestjs/testing';
import { RegulationflowService } from './regulationflow.service';

describe('RegulationflowService', () => {
  let service: RegulationflowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegulationflowService],
    }).compile();

    service = module.get<RegulationflowService>(RegulationflowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
