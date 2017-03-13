'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = loader;

var _jsYaml = require('js-yaml');

var _jsYaml2 = _interopRequireDefault(_jsYaml);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loader(str) {
  var raw = _jsYaml2.default.safeLoad(str);
  return { rule: 'root', value: null, children: parseNode(raw) };
}

function parseNode(node) {
  // iterate rule node
  return _lodash2.default.reduce(node, function (ret, props, rule) {
    // ignore `$` as it just set default value
    if (rule === '$') {
      return ret;
    }

    return ret.concat(
    // iterate props node, create children list
    _lodash2.default.reduce(props, function (mem, value, expected) {
      // remove rule‘s stamp `_`
      var n = { rule: rule.replace(/^_*/, ''), expected: expected, value: value, children: null };
      // contain sub rules
      if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
        _extends(n, {
          value: value.$ || null,
          children: parseNode(value)
        });
      }
      return mem.concat(n);
    }, []));
  }, []);
}
