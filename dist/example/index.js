'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styles = require('./styles.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/**
 * Example module.
 * @module web-cloud-frontend-commons/example
 */
/**
 * @function ExampleComponent React component to test the library.
 * @param {string} text The text to show.
 * @example <ExampleComponent text="my text" />
 */

function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles.example
  }, "Example Component: ", text);
}

exports.ExampleComponent = ExampleComponent;
