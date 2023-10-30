import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedonorComponent } from './update-donor.component';

describe('UpdateDonorComponent', () => {
  let component: UpdatedonorComponent;
  let fixture: ComponentFixture<UpdatedonorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatedonorComponent]
    });
    fixture = TestBed.createComponent(UpdatedonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
