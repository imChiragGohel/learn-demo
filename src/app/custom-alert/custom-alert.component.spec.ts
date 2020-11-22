import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomAlertComponent } from './custom-alert.component';

describe('CustomAlertComponent', () => {
  let component: CustomAlertComponent;
  let fixture: ComponentFixture<CustomAlertComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
