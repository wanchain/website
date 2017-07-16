'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withStyles = require('isomorphic-style-loader/lib/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Footer = require('./Footer.css');

var _Footer2 = _interopRequireDefault(_Footer);

var _Link = require('../Link');

var _Link2 = _interopRequireDefault(_Link);

var _email = require('../Image/email.png');

var _email2 = _interopRequireDefault(_email);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Footer = function (_React$Component) {
  (0, _inherits3.default)(Footer, _React$Component);

  function Footer() {
    (0, _classCallCheck3.default)(this, Footer);
    return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).apply(this, arguments));
  }

  (0, _createClass3.default)(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: _Footer2.default.root }, _react2.default.createElement('div', { className: _Footer2.default.container + ' container' }, _react2.default.createElement('div', { className: _Footer2.default.formGroup + ' form-group col-lg-4' }, _react2.default.createElement('img', { src: _email2.default }), _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'name',
        placeholder: 'Please enter the email address' }), _react2.default.createElement('div', { className: _Footer2.default['submit-area'] }, _react2.default.createElement('a', { className: 'btn ' + _Footer2.default['submit-button'], 'data-toggle': 'modal', 'data-target': '.bs-example-modal-lg' }, ' + ', 'Subscribe')), _react2.default.createElement('p', null, '\u66F4\u591A\u9879\u76EE\u8BF7\u54A8\u8BE2\uFF1A', _react2.default.createElement('span', null, 'info@wanchain.org'))), _react2.default.createElement('div', { className: _Footer2.default.formGroupDiv + ' form-group col-lg-4' }, _react2.default.createElement('div', { className: 'social-share', 'data-sites': 'weibo,qq,qzone,wechat,twitter,facebook' }))), _react2.default.createElement('div', { className: _Footer2.default.end }, _react2.default.createElement('span', null, '\xA9wanchain 2017 \u7248\u6743\u6240\u6709 all right reserved')));
    }
  }]);
  return Footer;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_Footer2.default)(Footer);

//# sourceMappingURL=Footer-compiled.js.map

//# sourceMappingURL=Footer-compiled-compiled.js.map