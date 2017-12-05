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
var Template_1 = require("./Template");
/**
 * Created by qinxin on 16/9/13.
 */
var ControllTemplate = /** @class */ (function (_super) {
    __extends(ControllTemplate, _super);
    function ControllTemplate() {
        var _this = _super.call(this) || this;
        console.log("constructor from ControllTemplate");
        return _this;
    }
    ControllTemplate.prototype.getName = function () {
        return "getName from controller Template\n";
    };
    return ControllTemplate;
}(Template_1.Template));
exports.ControllTemplate = ControllTemplate;
