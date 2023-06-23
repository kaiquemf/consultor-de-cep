import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorPorCepComponent } from './buscador.component';

describe('BuscadorPorCepComponent', () => {
  let component: BuscadorPorCepComponent;
  let fixture: ComponentFixture<BuscadorPorCepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscadorPorCepComponent]
    });
    fixture = TestBed.createComponent(BuscadorPorCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
