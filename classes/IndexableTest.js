"use strict";
exports.__esModule = true;
/**
 * Created by qinxin on 16/9/13.
 */
var TemplateIndexable = /** @class */ (function () {
    function TemplateIndexable() {
    }
    return TemplateIndexable;
}());
var IndexableTest = /** @class */ (function () {
    function IndexableTest() {
    }
    IndexableTest.prototype.test = function () {
        var ti = new TemplateIndexable();
        var aa = { name: "Holo", age: 30 };
        ti["Holo"] = aa;
        ti["Digo"] = { name: "Digo", age: 30 };
        console.log(typeof ti["Holo"]);
        console.log(ti);
    };
    return IndexableTest;
}());
exports.IndexableTest = IndexableTest;
