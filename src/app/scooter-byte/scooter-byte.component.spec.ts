import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScooterByteComponent } from './scooter-byte.component';

describe('ScooterByteComponent', () => {
  let component: ScooterByteComponent;
  let fixture: ComponentFixture<ScooterByteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScooterByteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScooterByteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
