"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.TypescriptComponent = void 0;
var react_1 = __importDefault(require("react"));
var index_styles_1 = require("./index.styles");
;
/**
 * Component to test the library
 */
function TypescriptComponent(_a) {
    var text = _a.text, highlight = _a.highlight;
    return (react_1["default"].createElement(index_styles_1.StyledDiv, { highlight: highlight },
        "Typescript Component text: ",
        text));
}
exports.TypescriptComponent = TypescriptComponent;
