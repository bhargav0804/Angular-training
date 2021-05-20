import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopfooterComponent } from './workshopfooter.component';

describe('WorkshopfooterComponent', () => {
  let component: WorkshopfooterComponent;
  let fixture: ComponentFixture<WorkshopfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
