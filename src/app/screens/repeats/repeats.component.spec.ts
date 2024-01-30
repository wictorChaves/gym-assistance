import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatsComponent } from './repeats.component';

describe('RepeatsComponent', () => {
  let component: RepeatsComponent;
  let fixture: ComponentFixture<RepeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepeatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
