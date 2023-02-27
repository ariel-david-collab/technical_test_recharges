import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtainAllComponent } from './obtain-all.component';

describe('ObtainAllComponent', () => {
  let component: ObtainAllComponent;
  let fixture: ComponentFixture<ObtainAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObtainAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObtainAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
