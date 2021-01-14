'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function _templateObject() {
  var data = _rollupPluginBabelHelpers.taggedTemplateLiteral(["\n  margin: 2em;\n  padding: 0.5em;\n  border: 2px solid #000;\n  font-size: 2em;\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
/**
 * Component to test the library
 * @param {string} text A text to show
 * @example <ExampleComponent text="my text" />
 */

function ExampleComponent(_ref) {
  var text = _ref.text;
  // return <div className={styles.example}>Example Component: {text}</div>;
  return /*#__PURE__*/React__default['default'].createElement(StyledDiv, null, "Example Component: ", text);
}
var StyledDiv = styled__default['default'].div(_templateObject());

exports.ExampleComponent = ExampleComponent;
