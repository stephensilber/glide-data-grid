"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _growingEntryStyle = require("./growing-entry-style");

var _collectionUtils = require("collection-utils");

var _support = require("../common/support");

var _excluded = ["placeholder", "value", "onKeyDown"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var GrowingEntryImpl = function GrowingEntryImpl(props) {
  var placeholder = props.placeholder,
      value = props.value,
      onKeyDown = props.onKeyDown,
      rest = _objectWithoutProperties(props, _excluded);

  var onChange = rest.onChange,
      className = rest.className;
  var inputRef = React.useRef(null);
  var useText = (0, _collectionUtils.withDefault)(value, "");
  (0, _support.assert)(onChange !== undefined, "GrowingEntry must be a controlled input area");
  React.useEffect(function () {
    var ta = inputRef.current;
    if (ta === null) return;
    var length = useText.toString().length;
    ta.focus();
    ta.setSelectionRange(length, length); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/React.createElement(_growingEntryStyle.GrowingEntryStyle, null, /*#__PURE__*/React.createElement(_growingEntryStyle.ShadowBox, {
    className: className
  }, useText + "\n"), /*#__PURE__*/React.createElement(_growingEntryStyle.InputBox, _extends({}, rest, {
    ref: inputRef,
    onKeyDown: onKeyDown,
    value: useText,
    placeholder: placeholder,
    dir: "auto"
  })));
};

var GrowingEntry = /*#__PURE__*/React.memo(GrowingEntryImpl);
var _default = GrowingEntry;
exports.default = _default;