import { TestBed } from '@angular/core/testing';

import { AigisExpCalcService } from './aigis-exp-calc.service';

describe('AigisExpCalcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AigisExpCalcService = TestBed.get(AigisExpCalcService);
    expect(service).toBeTruthy();
  });
});
