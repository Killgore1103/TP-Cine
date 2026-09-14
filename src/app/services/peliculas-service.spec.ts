import { TestBed } from '@angular/core/testing';

import { PeliculaService } from './peliculas-service';

describe('Peliculas', () => {
  let service: PeliculaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
