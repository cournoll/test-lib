'use strict';

var React = require('react');
var ExampleComponent$1 = require('./ExampleComponent.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: ExampleComponent$1.example
  }, "Example Component: ", text);
}

module.exports = ExampleComponent;
