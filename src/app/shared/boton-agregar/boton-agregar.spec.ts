import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonAgregar } from './boton-agregar';

describe('BotonAgregar', () => {
  let component: BotonAgregar;
  let fixture: ComponentFixture<BotonAgregar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonAgregar],
    }).compileComponents();

    fixture = TestBed.createComponent(BotonAgregar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
