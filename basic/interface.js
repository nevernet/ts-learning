// interface PassObj {
//     label: string;
// }
//
// function printLabel(obj: PassObj): void {
//     console.log(obj.label);
// }
//
// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);
//
// interface SquareConfig {
//     color?: string;
//     width?: number;
//     [propName: string]: any;
// }
//
// function createSquare(config: SquareConfig): { color: string; area: number } {
//     let newSquare = { color: "white", area: 100 };
//     console.log("check property:", config.color, config.width);
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }
//
// createSquare({});
//
// let mySquare = createSquare({ color: "black" });
// console.log("mySquare value: ", mySquare);
// console.log("any:", createSquare({ a: "123" }));
//
// interface funcTypes {
//     (name: string, age: number): string;
// }
//
// let abced: funcTypes;
// abced = function(name1: string, age1: number): string {
//     return name1 + " " + age1;
// }
//
// console.log(abced("daniel", 32));
//
//
// interface stringArray {
//     [index: number]: string;
// }
//
// interface strIndex {
//     [index: string]: string;
// }
//
// let sa: stringArray = ["Daniel", "Bob"];
// console.log(sa[0], sa);
// let sa1: string[] = ["Daniel", "Bob"];
// console.log(sa1[0], sa1);
//
// let ssa: strIndex = { "A": "Daniel" };
// console.log("ssa:", ssa["A"], ssa);
//
// class Animal {
//     name: string;
// }
// class Dog extends Animal {
//     breed: string;
// }
//
// // Error: indexing with a 'string' will sometimes get you a Dog!
// interface NotOkay {
//     [animal: number]: Animal;
//     // [y: string]: Dog;
// }
//
// interface NumberDictionary {
//     [index: string]: number;
//     length: number;    // ok, length is a number
//     // name: string;      // error, the type of 'name' is not a subtype of the indexer
// }
//
// interface ClockConstructor {
//     new (hour: number, minute: number): ClockInterface;
// }
//
// interface ClockInterface {
//     tick();
// }
//
// // class Clock implements ClockConstructor {
// //     currentTime: Date;
// //     constructor(h: number, m: number) { }
// // }
//
// class DigitalClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("beep beep");
//     }
// }
//
//
// interface Counter {
//     (start: number): string;
//     interval: number;
//     reset(): void;
// }
//
// function getCounter(): Counter {
//     let counter = <Counter>function(start: number) { };
//     counter.interval = 123;
//     counter.reset = function() { };
//     return counter;
// }
//
// let c = getCounter();
// c(10);
// c.reset();
// c.interval = 5.0;
//
//
//
//# sourceMappingURL=interface.js.map