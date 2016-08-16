"use strict";
var Init = (function () {
    function Init() {
    }
    Init.prototype.load = function () {
        if (localStorage.getItem('todos') == null || localStorage.getItem('todos') == undefined) {
            console.log('No Todos Found ... Creating...');
            var todos = [
                {
                    text: 'first'
                },
                {
                    text: 'second'
                },
                {
                    text: 'therd'
                }
            ];
            localStorage.setItem('todos', JSON.stringify(todos));
            return;
        }
        else {
            console.log('Found Todos...');
        }
    };
    return Init;
}());
exports.Init = Init;
//# sourceMappingURL=init-todos.js.map