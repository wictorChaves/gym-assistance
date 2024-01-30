import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullSetComponent } from './full-set.component';

describe('FullSetComponent', () => {
  let component: FullSetComponent;
  let fixture: ComponentFixture<FullSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullSetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
