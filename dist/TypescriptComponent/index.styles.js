"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.StyledDiv = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.StyledDiv = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 2em;\n  padding: 0.5em;\n  border: 2px solid ", ";\n  font-size: 2em;\n  text-align: center;\n"], ["\n  margin: 2em;\n  padding: 0.5em;\n  border: 2px solid ", ";\n  font-size: 2em;\n  text-align: center;\n"])), function (_a) {
    var highlight = _a.highlight;
    return (highlight ? 'red' : '#000');
});
var templateObject_1;
