// import 'reflect-metadata';

function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

function classDecorator(target: Function) {
    console.log(target.prototype, target.arguments, target.toString());
    target("Daniel", 30);

}

function propertyDecorator() {
    console.log("evulated property");
    return function(t:Function, name: string) {
        console.log('propertyDecorator:', t, name);
    }
}

function methodDecorator() {
    console.log("evulated method");
    return function(t:Function, name: string, descriptor: PropertyDescriptor) {
        console.log('propertyDecorator:', t, name, descriptor);
    }
}

@classDecorator
class C {
    @propertyDecorator
    p1: string;

    constructor(public name: string, age: number) {
    }

    @f()
    @g()
    method() { }

    @methodDecorator()
    func() {}


}

let cls = new C("D", 18);
console.log(cls.name);
console.log(cls.p1);
cls.method();