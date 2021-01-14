'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styles = require('./styles.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/**
 * Component to test the library
 * @param {object} props Component props
 * @param {string} props.text A text to show
 * @return {function} A simple div with text
 * @example <ExampleComponent text="my text" />
 */

function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles.example
  }, "Example Component: ", text);
}

exports.ExampleComponent = ExampleComponent;
