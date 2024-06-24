import { Test, TestingModule } from '@nestjs/testing';
import { RegulationflowfilesService } from './regulationflowfiles.service';

describe('RegulationflowfilesService', () => {
  let service: RegulationflowfilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegulationflowfilesService],
    }).compile();

    service = module.get<RegulationflowfilesService>(RegulationflowfilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
