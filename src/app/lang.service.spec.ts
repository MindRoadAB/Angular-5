import { TestBed, inject } from '@angular/core/testing';

import { LangService } from './lang.service';
import { HttpClientModule } from '@angular/common/http';

describe('LangService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LangService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([LangService], (service: LangService) => {
    expect(service).toBeTruthy();
  }));
});
