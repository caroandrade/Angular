import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerundioComponent } from './gerundio.component';

describe('GerundioComponent', () => {
  let component: GerundioComponent;
  let fixture: ComponentFixture<GerundioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerundioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerundioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
