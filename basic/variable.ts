function f(input: boolean) {
    let a = 100;

    //block scope 块级别作用域
    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }

    // Error: 'b' doesn't exist here
    // return b;
}

for (var i = 0; i < 10; i++) {
    // setTimeout(function() { console.log(i); }, 100 * i);
}

for (let i = 0; i < 10; i++) {
    // setTimeout(function() { console.log(i); }, 1000 * i);
}


const STATUS_OK = 1;
const STATUS_DELETED = 99;

enum STATUS { OK = 1, DELETED = 99 };
console.log('status enum:', STATUS.OK, STATUS.DELETED);

// destructing 解构
let input = [1, 2];
let [first, second] = input;

function f1([first, second]: [number, number]) {
    console.log('first, second:', first, second);
}
// f1(input); //Error
f1([first, second, 3]);

function f11(data: number[]) {
    console.log('data first, second:', data[0], data[1]);
}
f11([11, 22]);

let [first1, second1] = [1, 2];
console.log("[first1, second1]:", first1, second1);


let o = {
    a: "foo",
    b: 12,
    c: "bar"
}
let {a, b} = o;
console.log(a, b);

// ({ a1, b1 } = { a1: "hello", b1: 2 });
// console.log("a1, b1:", a1, b1);

export class TestType {
    a: string;
    b?: number;
};

function keepWholeObject(wholeObject: TestType) {
    let {a, b = 1001} = wholeObject;
    console.log('function default values:', a, b);
}

keepWholeObject({ a: "123", b:100 });
// keepWholeObject({ });


function f2({a, b = 0} = { a: "" }): void {
    console.log(a, b);
}

f2();
f2({ a: "Daniel" });
// f2({ a: 123, b: "哈哈哈哈" }); // Error
// f2({})









