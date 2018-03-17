'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
	var _ref$type = _ref.type,
	    type = _ref$type === undefined ? 'button' : _ref$type,
	    children = _ref.children,
	    onClick = _ref.onClick;
	return _react2.default.createElement(
		'button',
		{ type: type, className: 'button', onClick: onClick },
		children
	);
};

exports.default = Button;