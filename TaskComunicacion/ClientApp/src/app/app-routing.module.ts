import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddReacComponent } from './task-add-reac/task-add-reac.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
const routes: Routes = [
  {
    path: 'tasklist',
    component: TaskListComponent
  },
  {
    path: 'taskadd',
    component: TaskAddReacComponent
  },
  {
    path: 'taskedit/:id',
    component: TaskEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
