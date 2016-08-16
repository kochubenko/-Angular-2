"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var init_todos_1 = require('./init-todos');
var TodoService = (function (_super) {
    __extends(TodoService, _super);
    function TodoService() {
        _super.call(this);
        console.log('TodoService Initialize...');
        this.load();
    }
    TodoService.prototype.getTodos = function () {
        var todos = JSON.parse(localStorage.getItem('todos'));
        return todos;
    };
    TodoService.prototype.addTodo = function (newTodo) {
        var todos = JSON.parse(localStorage.getItem('todos'));
        todos.push(newTodo);
        localStorage.setItem('todos', JSON.stringify(todos));
    };
    TodoService.prototype.deleteTodo = function (todoText) {
        var todos = JSON.parse(localStorage.getItem('todos'));
        for (var index = 0; index < todos.length; index += 1) {
            if (todos[index].text == todoText) {
                todos.splice(index, 1);
            }
        }
        localStorage.setItem('todos', JSON.stringify(todos));
    };
    TodoService.prototype.updateTodo = function (oldText, newText) {
        console.log(oldText, newText);
        var todos = JSON.parse(localStorage.getItem('todos'));
        for (var index = 0; index < todos.length; index += 1) {
            if (todos[index].text == oldText) {
                todos[index].text = newText;
            }
        }
        localStorage.setItem('todos', JSON.stringify(todos));
    };
    TodoService = __decorate([
        core_1.Injectable()
    ], TodoService);
    return TodoService;
}(init_todos_1.Init));
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map