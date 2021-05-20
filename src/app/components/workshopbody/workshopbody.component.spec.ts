import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopbodyComponent } from './workshopbody.component';

describe('WorkshopbodyComponent', () => {
  let component: WorkshopbodyComponent;
  let fixture: ComponentFixture<WorkshopbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopbodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
