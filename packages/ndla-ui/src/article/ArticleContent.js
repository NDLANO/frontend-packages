'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ndlaArticleScripts = require('ndla-article-scripts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016-present, NDLA.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This source code is licensed under the GPLv3 license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var TopicArticleContent = function (_Component) {
  _inherits(TopicArticleContent, _Component);

  function TopicArticleContent() {
    _classCallCheck(this, TopicArticleContent);

    return _possibleConstructorReturn(this, (TopicArticleContent.__proto__ || Object.getPrototypeOf(TopicArticleContent)).apply(this, arguments));
  }

  _createClass(TopicArticleContent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _ndlaArticleScripts.initArticleScripts)();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _ndlaArticleScripts.removeEventListenerForResize)();
      (0, _ndlaArticleScripts.removeAsideClickListener)();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          content = _props.content,
          rest = _objectWithoutProperties(_props, ['content']);

      return _react2.default.createElement('div', _extends({ dangerouslySetInnerHTML: { __html: content } }, rest));
    }
  }]);

  return TopicArticleContent;
}(_react.Component);

exports.default = TopicArticleContent;


TopicArticleContent.propTypes = {
  content: _react.PropTypes.string.isRequired
};