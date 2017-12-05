let isDone: boolean = false;
let decimal: number = 1;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log("boolean and number: ", isDone, decimal, hex, binary, octal);


let myName: string = "Daniel Qin";
let age: number = 32;
let sayHello: string = "Hello";

console.log("test: ", myName, age, sayHello);

let list: number[] = [1, 2, 4];
let x: [string, number] = ["Daniel Qin", 32];

//union type
//tobe


enum UserType { "Payed", "Customer", "Super" }
enum Color { Red, Green, Blue }
let ut: UserType = UserType.Customer;
let c: Color = Color.Blue;

//get enum type name ?
let cName: string = Color[2];
console.log("cName:", cName, c);

let notSure: any = 2;

function setName(name: string): void {
    //todo
}

setName("Daniel");

let unuseable: void = undefined;
let nullValue: void = null;

//type assertions is type cast in other language
let someValue: any = "Hello";
//cast someValue to type string
let strLength: number = (<string>someValue).length;
let strLength1: number = (someValue as string).length;












