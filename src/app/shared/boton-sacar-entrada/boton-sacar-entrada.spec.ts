import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonSacarEntrada } from './boton-sacar-entrada';

describe('BotonSacarEntrada', () => {
  let component: BotonSacarEntrada;
  let fixture: ComponentFixture<BotonSacarEntrada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonSacarEntrada],
    }).compileComponents();

    fixture = TestBed.createComponent(BotonSacarEntrada);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
