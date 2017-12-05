var isDone = false;
var decimal = 1;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log("boolean and number: ", isDone, decimal, hex, binary, octal);
var myName = "Daniel Qin";
var age = 32;
var sayHello = "Hello";
console.log("test: ", myName, age, sayHello);
var list = [1, 2, 4];
var x = ["Daniel Qin", 32];
//union type
//tobe
var UserType;
(function (UserType) {
    UserType[UserType["Payed"] = 0] = "Payed";
    UserType[UserType["Customer"] = 1] = "Customer";
    UserType[UserType["Super"] = 2] = "Super";
})(UserType || (UserType = {}));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var ut = UserType.Customer;
var c = Color.Blue;
//get enum type name ?
var cName = Color[2];
console.log("cName:", cName, c);
var notSure = 2;
function setName(name) {
    //todo
}
setName("Daniel");
var unuseable = undefined;
var nullValue = null;
//type assertions is type cast in other language
var someValue = "Hello";
//cast someValue to type string
var strLength = someValue.length;
var strLength1 = someValue.length;
//# sourceMappingURL=basic_types.js.map