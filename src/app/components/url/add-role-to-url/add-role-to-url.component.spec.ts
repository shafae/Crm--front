import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoleToUrlComponent } from './add-role-to-url.component';

describe('AddRoleToUrlComponent', () => {
  let component: AddRoleToUrlComponent;
  let fixture: ComponentFixture<AddRoleToUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRoleToUrlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRoleToUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
