import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-add-reac',
  templateUrl: './task-add-reac.component.html',
  styleUrls: ['./task-add-reac.component.css']
})
export class TaskAddReacComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private taskService: TaskService, private formBuilder: FormBuilder) { }

  task: Task;

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required],
      priority: ['']
    });
    this.task = new Task();
  }

  add() {
    this.taskService.addTask(this.task)
      .subscribe(task => {
        alert('Se agrego una nueva tarea')
      });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.add();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}

