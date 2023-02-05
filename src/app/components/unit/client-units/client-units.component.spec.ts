import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUnitsComponent } from './client-units.component';

describe('ClientUnitsComponent', () => {
  let component: ClientUnitsComponent;
  let fixture: ComponentFixture<ClientUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientUnitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
