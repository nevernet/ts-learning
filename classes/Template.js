"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var AbstractTemplate_1 = require("./AbstractTemplate");
/**
 * Created by qinxin on 16/9/13.
 */
var Template = /** @class */ (function (_super) {
    __extends(Template, _super);
    function Template() {
        var _this = _super.call(this) || this;
        Template.varStatic = [1, "aa"];
        console.log("construct from Template");
        return _this;
    }
    Template.prototype.getBody = function () {
        return "body from Template";
    };
    Template.prototype.testThis = function () {
        console.log("body from testThis:", this.getBody());
    };
    Template.testStatic = function () {
        console.log("static method");
        //at here "this" is static, because the method is static
        console.log("from this:", this.varStatic);
    };
    return Template;
}(AbstractTemplate_1.AbstractTemplate));
exports.Template = Template;
