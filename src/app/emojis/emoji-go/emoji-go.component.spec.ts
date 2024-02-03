import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiGoComponent } from './emoji-go.component';

describe('EmojiGoComponent', () => {
  let component: EmojiGoComponent;
  let fixture: ComponentFixture<EmojiGoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmojiGoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmojiGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
