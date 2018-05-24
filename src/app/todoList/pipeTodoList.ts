import { Pipe, PipeTransform } from '@angular/core';
import { TodoListComponent } from './todoList.component'
import { Todo } from './objectTodo'

@Pipe({
    name: 'searchFilter'
  })
  export class FilterPipe implements PipeTransform {
    transform(todos = [], searchText): Todo[] {
      if (todos && searchText) {
        return todos.filter(todo => todo.title.toLowerCase().includes(searchText.toLowerCase()));
      }
      return todos;
    }
  }
