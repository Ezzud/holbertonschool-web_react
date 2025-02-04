"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeWork = exports.isDirector = exports.Teacher = exports.Director = void 0;
const Director = /** @class */ (function () {
    function Director() {
        return;
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
exports.Director = Director;
const Teacher = /** @class */ (function () {
    function Teacher() {
        return;
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
exports.Teacher = Teacher;
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
exports.isDirector = isDirector;
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
exports.executeWork = executeWork;
