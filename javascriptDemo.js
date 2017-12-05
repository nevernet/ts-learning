
var num = 1;
var floatNum = 3.14;
var str = 'Hello';
var arr = [1, 2, 3, 4];
var obj = {
    name: 'Javascript',
    age: 30,
};

function testNum(num) {
    if( num === 1 ) {
        console.log('num value is 1');
    }
    numS = '1';
    console.log( 'num equals numS with Type:', num === numS );
    console.log( 'num equals numS:', num == numS );
}

function testWhile(num) {
    num = 10;
    while(num < 10) {
         console.log('in while: num value is:', num);
         num++;
    }
    num = 10;
    do {
         console.log('in do.. while: num value is:', num);
         num++;
    }while(num < 10);
}

function testObj(num, arr, obj) {
    for(num=1;num<10;num++){
         console.log('for num value is:', num);
    }
    for(i=0;i<arr.length;i++){
         console.log('arr item:', arr[i]);
    }

    console.log('obj:');
    console.log(obj.name, obj.age);

    for(var p in obj) {
        console.log('obj key:', p, ', obj value:', obj[p]);
    }
}


var plainFun = function(name, age) {
     console.log(name, age);
};

var loveFun = function(name, age) {
    console.log({
        name: name,
        age: age
    });
};


function printFun(obj, callback) {
    if(callback) {
        callback(obj.name, obj.age);
    }
}

printFun(obj, plainFun);
printFun(obj, loveFun);

function Person(name, age) {
     this.name = name;
     this.age = age;

     this.printInfo = function() {
          console.log(this.name, this.age);
    };
}
var p = new Person('Daniel Qin', 30);
var p1 = new Person('Tom', 23);
console.log(p, p1);
p.printInfo();
p1.printInfo();

var lPerson = {
    name: '',
    age: 0,
    setName(name) {
        this.name = name;
    },
    setAge(age) {
         this.age = age;
    },
    printInfo() {
        console.log(this.name, this.age);
    }
}
console.log(lPerson, lPerson.age, lPerson.name);
lPerson.setName('Daniel Qin');
lPerson.setAge(30);
lPerson.printInfo();

