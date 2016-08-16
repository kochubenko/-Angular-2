import {Component, OnInit} from '@angular/core';
import {TodoService} from '../todo.service'

@Component({
  moduleId: module.id,
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;
  oldText;
  appState = 'default';
  constructor(private _todoService: TodoService) {
  }

  ngOnInit() {
    this.todos = this._todoService.getTodos();
  }

  addTodo() {
    var newTodo ={
      text:this.text
    }
    this.todos.push({
      text: this.text
    })
    this._todoService.addTodo(newTodo)
  }

  deleteTodo(todoText) {
    for (var index = 0; index < this.todos.length; index += 1) {
      if (this.todos[index].text == todoText) {
        this.todos.splice(index, 1);
      }
    }
    this._todoService.deleteTodo(todoText);
  }

  editTodo(todo){
    this.appState = 'edit';
    this.oldText = todo.text;
    this.text = todo.text;
  }
  updateTodo(){
    for (var index = 0; index < this.todos.length; index += 1) {
      if (this.todos[index].text == this.oldText) {
        this.todos[index].text = this.text;
      }
    }
    this._todoService.updateTodo(this.oldText, this.text)
  }
}
