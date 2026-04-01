import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasWidget } from './caracteristicas-widget';

describe('CaracteristicasWidget', () => {
  let component: CaracteristicasWidget;
  let fixture: ComponentFixture<CaracteristicasWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaracteristicasWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(CaracteristicasWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
