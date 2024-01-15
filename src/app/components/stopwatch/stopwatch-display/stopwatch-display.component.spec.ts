import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopwatchDisplayComponent } from './stopwatch-display.component';

describe('StopwatchDisplayComponent', () => {
  let component: StopwatchDisplayComponent;
  let fixture: ComponentFixture<StopwatchDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopwatchDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopwatchDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
