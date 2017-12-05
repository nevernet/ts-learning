/**
 * Created by qinxin on 16/9/10.
 */

function testDuckTyping(param: {name: string}) {
    console.log(param.name);
}

let p = {name: "Daniel Qin", age: 34};
testDuckTyping(p);
