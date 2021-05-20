import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopheaderComponent } from './workshopheader.component';

describe('WorkshopheaderComponent', () => {
  let component: WorkshopheaderComponent;
  let fixture: ComponentFixture<WorkshopheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
