import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-consult',
  templateUrl: './task-consult.component.html',
  styleUrls: ['./task-consult.component.css']
})
export class TaskConsultComponent implements OnInit {

  constructor(private route: ActivatedRoute, private taskService: TaskService, private location: Location) { }

  task: Task;

  @Input() title:string;
  
  ngOnInit() {
   
  }
 
}
