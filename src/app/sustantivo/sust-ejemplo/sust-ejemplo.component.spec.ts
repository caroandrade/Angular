import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustEjemploComponent } from './sust-ejemplo.component';

describe('SustEjemploComponent', () => {
  let component: SustEjemploComponent;
  let fixture: ComponentFixture<SustEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SustEjemploComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SustEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
