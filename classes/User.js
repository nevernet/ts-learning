"use strict";
exports.__esModule = true;
/**
 * Created by qinxin on 16/9/13.
 */
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.walk = function () {
        console.log('走两步');
    };
    return User;
}());
exports.User = User;
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.walk = function () {
        console.log('爬两步');
    };
    return Animal;
}());
exports.Animal = Animal;
var tom = new User();
var dog = new Animal();
console.log(tom.walk(), dog.walk());
