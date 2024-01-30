import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiWorkoutComponent } from './emoji-workout.component';

describe('EmojiWorkoutComponent', () => {
  let component: EmojiWorkoutComponent;
  let fixture: ComponentFixture<EmojiWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmojiWorkoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmojiWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
