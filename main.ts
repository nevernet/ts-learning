import {TemplateInterface, TemplateWidth} from "./interfaces/TemplateInterface";
import {Template} from "./classes/Template";
import {ControllTemplate} from "./classes/ControllTemplate";
import {TemplateType} from "./enum/TemplateType";
import {IndexableTest} from "./classes/IndexableTest";

console.log(TemplateWidth);

let tpl = new Template();
tpl.testThis();
console.log(tpl.getBody());
Template.testStatic();

//cannot access private property or method from outside of class.
// console.log("from outside private static:", Template.varStatic);


let cTpl = new ControllTemplate();
console.log(cTpl.getName());

console.log(TemplateType.Common);

let idTest = new IndexableTest();
idTest.test();

