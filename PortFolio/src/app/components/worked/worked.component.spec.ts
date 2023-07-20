import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkedComponent } from './worked.component';

describe('WorkedComponent', () => {
  let component: WorkedComponent;
  let fixture: ComponentFixture<WorkedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkedComponent]
    });
    fixture = TestBed.createComponent(WorkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
