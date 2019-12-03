import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskConsultComponent } from './task-consult.component';

describe('TaskConsultComponent', () => {
  let component: TaskConsultComponent;
  let fixture: ComponentFixture<TaskConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
