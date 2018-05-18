import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-todoList',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.css']
})

export class TodoListComponent {
  newTodoTitle: string = '';
  todos: Array<Todo> = [];

  remain() {
    let il = 0;
    this.todos.forEach(t => {
      if (!t.complete) {
        il++;
      }
    });
    return il;
  }
  
  addTodo() {
    if(!this.newTodoTitle){
      return;
    }
    const newTodo: Todo = {
      title: this.newTodoTitle,
      date: new Date(),
      complete: false
    };
    this.todos.push(newTodo);
    this.newTodoTitle = ''; 
  }
  deleteTodo(i) {
    this.todos.splice(i, 1)
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

@Pipe({
  name: 'searchFilter'
})
export class FilterPipe implements PipeTransform {
  transform(todos, searchText: string): Todo[] {
    if(!todos) return [];
    if(!searchText) return todos;
    searchText = searchText.toLowerCase();
    return todos.filter( todo => todo.title.toLowerCase().includes(searchText));
  }
}





interface Todo {
  title: string;
  date: Date;
  complete: boolean;

}
