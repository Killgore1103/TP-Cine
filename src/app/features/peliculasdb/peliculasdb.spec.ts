import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasDB } from './peliculasdb';

describe('Home', () => {
  let component: PeliculasDB;
  let fixture: ComponentFixture<PeliculasDB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculasDB],
    }).compileComponents();

    fixture = TestBed.createComponent(PeliculasDB);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
