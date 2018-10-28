import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AigisExpCalcComponent } from './aigis-exp-calc.component';

describe('AigisExpCalcComponent', () => {
  let component: AigisExpCalcComponent;
  let fixture: ComponentFixture<AigisExpCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AigisExpCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AigisExpCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
