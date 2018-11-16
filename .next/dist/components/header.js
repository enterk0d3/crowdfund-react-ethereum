'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/satriyo/Documents/LearnNodeJS/Ethereum/kickstart/components/header.js';

//2 curly braces at Menu to add custom CSS style, 
//first {} to indicate its JS, 2nd {} object literal we create
exports.default = function () {
	return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: '10px' }, __source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement(_routes.Link, { route: '/', __source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, _react2.default.createElement('a', { className: 'item', __source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, ' CrowdCoin')), _react2.default.createElement(_semanticUiReact.Menu.Item, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, 'Biografly Coin'), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	}, _react2.default.createElement(_routes.Link, { route: '/', __source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}, _react2.default.createElement('a', { className: 'item', __source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	}, ' Campaign')), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
			fileName: _jsxFileName,
			lineNumber: 25
		}
	}, _react2.default.createElement('a', { className: 'item', __source: {
			fileName: _jsxFileName,
			lineNumber: 26
		}
	}, ' +'))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWVudSIsIkxpbmsiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQVMsQUFBWTs7Ozs7O0FBQ3JCO0FBQ0EsQUFDQTtrQkFBZSxZQUFNLEFBQ3BCO3dCQUNDLEFBQUMsdUNBQUssT0FBTyxFQUFFLFdBQWYsQUFBYSxBQUFhO2FBQTFCO2VBQUEsQUFDQztBQUREO0VBQUEsa0JBQ0MsQUFBQyw4QkFBSyxPQUFOLEFBQVk7YUFBWjtlQUFBLEFBQ0M7QUFERDtvQkFDQyxjQUFBLE9BQUcsV0FBSCxBQUFhO2FBQWI7ZUFBQTtBQUFBO0lBRkYsQUFDQyxBQUNDLEFBSUQsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNOzthQUFOO2VBQUE7QUFBQTtBQUFBLElBTkQsQUFNQyxBQUlBLG1DQUFDLGNBQUQsc0JBQUEsQUFBTSxRQUFLLFVBQVgsQUFBb0I7YUFBcEI7ZUFBQSxBQUVBO0FBRkE7b0JBRUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7YUFBWjtlQUFBLEFBQ0M7QUFERDtvQkFDQyxjQUFBLE9BQUcsV0FBSCxBQUFhO2FBQWI7ZUFBQTtBQUFBO0lBSEQsQUFFQSxBQUNDLEFBSUQsK0JBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7YUFBWjtlQUFBLEFBQ0M7QUFERDtvQkFDQyxjQUFBLE9BQUcsV0FBSCxBQUFhO2FBQWI7ZUFBQTtBQUFBO0lBbkJILEFBQ0MsQUFVQyxBQU9BLEFBQ0MsQUFPSDtBQTNCRCIsImZpbGUiOiJoZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NhdHJpeW8vRG9jdW1lbnRzL0xlYXJuTm9kZUpTL0V0aGVyZXVtL2tpY2tzdGFydCJ9