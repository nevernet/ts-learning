"use strict";
exports.__esModule = true;
function f(input) {
    var a = 100;
    //block scope
    if (input) {
        // Still okay to reference 'a'
        var b_1 = a + 1;
        return b_1;
    }
    // Error: 'b' doesn't exist here
    // return b;
}
for (var i = 0; i < 10; i++) {
    // setTimeout(function() { console.log(i); }, 100 * i);
}
for (var i_1 = 0; i_1 < 10; i_1++) {
    // setTimeout(function() { console.log(i); }, 1000 * i);
}
var STATUS_OK = 1;
var STATUS_DELETED = 99;
var STATUS;
(function (STATUS) {
    STATUS[STATUS["OK"] = 1] = "OK";
    STATUS[STATUS["DELETED"] = 99] = "DELETED";
})(STATUS || (STATUS = {}));
;
console.log('status enum:', STATUS.OK, STATUS.DELETED);
// destructing 解构
var input = [1, 2];
var first = input[0], second = input[1];
function f1(_a) {
    var first = _a[0], second = _a[1];
    console.log('first, second:', first, second);
}
// f1(input); //Error
f1([first, second, 3]);
function f11(data) {
    console.log('data first, second:', data[0], data[1]);
}
f11([11, 22]);
var _a = [1, 2], first1 = _a[0], second1 = _a[1];
console.log("[first1, second1]:", first1, second1);
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var a = o.a, b = o.b;
console.log(a, b);
// ({ a1, b1 } = { a1: "hello", b1: 2 });
// console.log("a1, b1:", a1, b1);
var TestType = /** @class */ (function () {
    function TestType() {
    }
    return TestType;
}());
exports.TestType = TestType;
;
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
    console.log('function default values:', a, b);
}
keepWholeObject({ a: "123", b: 100 });
// keepWholeObject({ });
function f2(_a) {
    var _b = _a === void 0 ? { a: "" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    console.log(a, b);
}
f2();
f2({ a: "Daniel" });
f2({ a: 123, b: "哈哈哈哈" });
// f2({})
