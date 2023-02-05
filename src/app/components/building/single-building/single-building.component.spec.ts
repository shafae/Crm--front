import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBuildingComponent } from './single-building.component';

describe('SingleBuildingComponent', () => {
  let component: SingleBuildingComponent;
  let fixture: ComponentFixture<SingleBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleBuildingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
