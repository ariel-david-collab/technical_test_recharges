import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRechargeModalComponent } from './add-recharge-modal.component';

describe('AddRechargeModalComponent', () => {
  let component: AddRechargeModalComponent;
  let fixture: ComponentFixture<AddRechargeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRechargeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRechargeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
