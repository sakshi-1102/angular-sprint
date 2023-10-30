import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDonorComponent } from './create-donor.component';

describe('CreateDonorComponent', () => {
  let component: CreateDonorComponent;
  let fixture: ComponentFixture<CreateDonorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDonorComponent]
    });
    fixture = TestBed.createComponent(CreateDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
