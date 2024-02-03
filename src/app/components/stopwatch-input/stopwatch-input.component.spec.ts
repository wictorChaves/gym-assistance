import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopwatchInputComponent } from './stopwatch-input.component';

describe('StopwatchInputComponent', () => {
  let component: StopwatchInputComponent;
  let fixture: ComponentFixture<StopwatchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopwatchInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopwatchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
