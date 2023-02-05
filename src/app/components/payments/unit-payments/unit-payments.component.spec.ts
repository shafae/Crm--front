import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitPaymentsComponent } from './unit-payments.component';

describe('UnitPaymentsComponent', () => {
  let component: UnitPaymentsComponent;
  let fixture: ComponentFixture<UnitPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitPaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
