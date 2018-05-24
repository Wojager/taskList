import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './objectTodo'

@Component({
  selector: 'appTodoList',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.css']
})

export class TodoListComponent {
  newTodoTitle = '';
  todos: Todo[] = [];
  searchText = '';

  remain() {
    const remainTasks = this.todos.filter(x => !x.complete);
    return remainTasks.length;
  }

  addTodo() {
    if (this.newTodoTitle) {
      const newTodo: Todo = {
        title: this.newTodoTitle,
        date: new Date(),
        complete: false
      };
      this.todos.push(newTodo);
      this.newTodoTitle = '';
    }
  }
  
  deleteTodo(i) {
    this.todos.splice(i, 1);
  }

  sortA() {
    this.todos = this.todos.sort((a, b) => a.title.localeCompare(b.title));
  }

  sortZ() {
    this.todos = this.todos.sort((a, b) => b.title.localeCompare(a.title));
  }

  sortUp() {
    this.todos = this.todos.sort((a, b) => a.date.getTime() - b.date.getTime());
  }

  sortDown() {
    this.todos = this.todos.sort((a, b) => b.date.getTime() - a.date.getTime());
  }

}
