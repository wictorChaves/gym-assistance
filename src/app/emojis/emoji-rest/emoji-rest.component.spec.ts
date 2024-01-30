import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiRestComponent } from './emoji-rest.component';

describe('EmojiRestComponent', () => {
  let component: EmojiRestComponent;
  let fixture: ComponentFixture<EmojiRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmojiRestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmojiRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
