import { Component, OnInit } from '@angular/core';
import { TodoEntry } from '../todo-entry';

import { ListDataService } from '../list-data.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public subscription;
  todo_list : TodoEntry[] = [];
  
  constructor(
    private liService: ListDataService, // inject service
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // onDestroy cancels the subscribe request
  }

  ngOnInit(): void {
    this.subscription = this.liService.get().subscribe(msg => this.todo_list = msg);
    this.liService.forceReload()
  }

  public delete_todo(i: number): void {
    this.liService.remove(i);
  }
}