import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAddReacComponent } from './task-add-reac.component';

describe('TaskAddReacComponent', () => {
  let component: TaskAddReacComponent;
  let fixture: ComponentFixture<TaskAddReacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskAddReacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAddReacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
