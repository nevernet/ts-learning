// import 'reflect-metadata';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("f(): called");
    };
}
function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("g(): called");
    };
}
function classDecorator(target) {
    console.log(target.prototype, target.arguments, target.toString());
    target("Daniel", 30);
}
function propertyDecorator() {
    console.log("evulated property");
    return function (t, name) {
        console.log('propertyDecorator:', t, name);
    };
}
function methodDecorator() {
    console.log("evulated method");
    return function (t, name, descriptor) {
        console.log('propertyDecorator:', t, name, descriptor);
    };
}
var C = (function () {
    function C(name, age) {
        this.name = name;
    }
    C.prototype.method = function () { };
    C.prototype.func = function () { };
    return C;
}());
__decorate([
    propertyDecorator
], C.prototype, "p1");
__decorate([
    f(),
    g()
], C.prototype, "method");
__decorate([
    methodDecorator()
], C.prototype, "func");
C = __decorate([
    classDecorator
], C);
var cls = new C("D", 18);
console.log(cls.name);
console.log(cls.p1);
cls.method();
