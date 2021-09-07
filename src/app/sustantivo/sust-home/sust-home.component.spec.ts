import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustHomeComponent } from './sust-home.component';

describe('SustHomeComponent', () => {
  let component: SustHomeComponent;
  let fixture: ComponentFixture<SustHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SustHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SustHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
