import {UserInterface} from "../interfaces/UserInterface";
/**
 * Created by qinxin on 16/9/13.
 */


export class User implements UserInterface {
    name: string;
    age: number;

    walk() {
        console.log('走两步')
    }
}


export class Animal implements UserInterface {
    name: string;
    age: number;

    walk() {
        console.log('爬两步')
    }
}


let tom = new User();
// let tom = new Animal();
let dog = new Animal();

console.log(tom.walk(), dog.walk());