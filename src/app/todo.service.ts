import { Injectable } from '@angular/core';
import {Init} from './init-todos'

@Injectable()
export class TodoService extends Init{

  constructor() {
    super();
    console.log('TodoService Initialize...');
    this.load();
  }

  getTodos(){
    var todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }
  addTodo(newTodo){
    var todos = JSON.parse(localStorage.getItem('todos'));
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  deleteTodo(todoText){
    var todos = JSON.parse(localStorage.getItem('todos'));
    for (var index = 0; index < todos.length; index += 1) {
      if (todos[index].text == todoText) {
        todos.splice(index, 1);
      }
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  updateTodo(oldText, newText){
    console.log(oldText, newText );
    var todos = JSON.parse(localStorage.getItem('todos'));
    for (var index = 0; index < todos.length; index += 1) {
      if (todos[index].text == oldText) {
        todos[index].text = newText;
      }
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
