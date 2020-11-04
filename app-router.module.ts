import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { TodoListComponent } from '../todo-list/todo-list.component'
import { TodoDetailsComponent } from '../todo-details/todo-details.component'

const routes: Routes = [
  { path: 'todoList', component: TodoListComponent  },
  { path: 'todoDetails', component: TodoDetailsComponent  },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }