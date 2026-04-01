import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputSimples } from './text-input-simples';

describe('TextInputSimples', () => {
  let component: TextInputSimples;
  let fixture: ComponentFixture<TextInputSimples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextInputSimples],
    }).compileComponents();

    fixture = TestBed.createComponent(TextInputSimples);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
