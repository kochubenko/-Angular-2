"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var TodosComponent = (function () {
    function TodosComponent(_todoService) {
        this._todoService = _todoService;
        this.appState = 'default';
    }
    TodosComponent.prototype.ngOnInit = function () {
        this.todos = this._todoService.getTodos();
    };
    TodosComponent.prototype.addTodo = function () {
        var newTodo = {
            text: this.text
        };
        this.todos.push({
            text: this.text
        });
        this._todoService.addTodo(newTodo);
    };
    TodosComponent.prototype.deleteTodo = function (todoText) {
        for (var index = 0; index < this.todos.length; index += 1) {
            if (this.todos[index].text == todoText) {
                this.todos.splice(index, 1);
            }
        }
        this._todoService.deleteTodo(todoText);
    };
    TodosComponent.prototype.editTodo = function (todo) {
        this.appState = 'edit';
        this.oldText = todo.text;
        this.text = todo.text;
    };
    TodosComponent.prototype.updateTodo = function () {
        for (var index = 0; index < this.todos.length; index += 1) {
            if (this.todos[index].text == this.oldText) {
                this.todos[index].text = this.text;
            }
        }
        this._todoService.updateTodo(this.oldText, this.text);
    };
    TodosComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-todos',
            templateUrl: 'todos.component.html',
            styleUrls: ['todos.component.css']
        })
    ], TodosComponent);
    return TodosComponent;
}());
exports.TodosComponent = TodosComponent;
//# sourceMappingURL=todos.component.js.map