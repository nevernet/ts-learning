"use strict";
exports.__esModule = true;
var TemplateInterface_1 = require("./interfaces/TemplateInterface");
var Template_1 = require("./classes/Template");
var ControllTemplate_1 = require("./classes/ControllTemplate");
var TemplateType_1 = require("./enum/TemplateType");
var IndexableTest_1 = require("./classes/IndexableTest");
console.log(TemplateInterface_1.TemplateWidth);
var tpl = new Template_1.Template();
tpl.testThis();
console.log(tpl.getBody());
Template_1.Template.testStatic();
//cannot access private property or method from outside of class.
// console.log("from outside private static:", Template.varStatic);
var cTpl = new ControllTemplate_1.ControllTemplate();
console.log(cTpl.getName());
console.log(TemplateType_1.TemplateType.Common);
var idTest = new IndexableTest_1.IndexableTest();
idTest.test();
