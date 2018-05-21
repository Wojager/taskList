import { Pipe, PipeTransform } from '@angular/core';
import { TodoListComponent } from './todoList.component'
import { Todo } from './objectTodo'

@Pipe({
    name: 'searchFilter'
  })
  export class FilterPipe implements PipeTransform {
    transform(todos, searchText): Todo[] {
      if (!todos) return [];
        if (!searchText) return todos;
          searchText = searchText.toLowerCase();
          return todos.filter(todo => todo.title.toLowerCase().includes(searchText));
    }
  }

