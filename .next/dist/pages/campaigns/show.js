'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _semanticUiReact = require('semantic-ui-react');

var _layout = require('../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/satriyo/Documents/LearnNodeJS/Ethereum/kickstart/pages/campaigns/show.js?entry';


var CampaignShow = function (_Component) {
	(0, _inherits3.default)(CampaignShow, _Component);

	function CampaignShow() {
		(0, _classCallCheck3.default)(this, CampaignShow);

		return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
	}

	(0, _createClass3.default)(CampaignShow, [{
		key: 'renderCards',
		value: function renderCards() {
			//destructuring, why not in order ?
			var _props = this.props,
			    balance = _props.balance,
			    manager = _props.manager,
			    minimumContribution = _props.minimumContribution,
			    requestsCount = _props.requestsCount,
			    approversCount = _props.approversCount;

			var items = [{
				header: manager,
				meta: 'Address of Manager',
				description: 'The manager created this campaign and can create requests to withdraw money',
				style: { overflowWrap: 'break-word' }
			}, {
				header: minimumContribution,
				meta: 'Minimum Contribution (wei)',
				description: 'You must contribute at least this much wei to become an approver'
			}, {
				header: requestsCount,
				meta: 'Number of Requests',
				description: 'A request tries to withdraw money from the contract. Request must be approve by approvers'
			}, {
				header: approversCount,
				meta: 'Number of Approvers',
				description: 'Number of people who have already donated to this campaign'
			}, {
				header: _web2.default.utils.fromWei(balance, 'ether'),
				meta: 'Campaign Balance (ether)',
				description: 'How much money this campaign has left to spend'
			}];

			return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 77
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 84
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 85
				}
			}, ' Campaign Show '), _react2.default.createElement(_semanticUiReact.Grid, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 87
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 88
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
					fileName: _jsxFileName,
					lineNumber: 89
				}
			}, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
					fileName: _jsxFileName,
					lineNumber: 94
				}
			}, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
					fileName: _jsxFileName,
					lineNumber: 95
				}
			}))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 99
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 100
				}
			}, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
					fileName: _jsxFileName,
					lineNumber: 101
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 102
				}
			}, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 103
				}
			}, ' View Request ')))))));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var campaign, summary;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:

								// console.log (props.query.address);
								//call to campaign func
								campaign = (0, _campaign2.default)(props.query.address);
								_context.next = 3;
								return campaign.methods.getSummary().call();

							case 3:
								summary = _context.sent;

								console.log(summary);

								//translation layer here (labelling propery)
								//later on inside componen use the label
								return _context.abrupt('return', {
									address: props.query.address,
									minimumContribution: summary[0],
									balance: summary[1],
									requestsCount: summary[2],
									approversCount: summary[3],
									manager: summary[4]

								});

							case 6:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJMYXlvdXQiLCJjYW1wYWlnbkZ1bmN0aW9uIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsImNhbXBhaWduIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTTs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBc0I7Ozs7QUFDN0IsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBUyxBQUFZOzs7Ozs7O0ksQUFJZjs7Ozs7Ozs7Ozs7Z0NBd0JTLEFBQ2I7QUFEYTtnQkFRVCxLQVJTLEFBUUo7T0FSSSxBQUdaLGlCQUhZLEFBR1o7T0FIWSxBQUlaLGlCQUpZLEFBSVo7T0FKWSxBQUtaLDZCQUxZLEFBS1o7T0FMWSxBQU1aLHVCQU5ZLEFBTVo7T0FOWSxBQU9aLHdCQVBZLEFBT1osQUFJRDs7T0FBTTtZQUNOLEFBQ1MsQUFDUjtVQUZELEFBRU8sQUFDTjtpQkFIRCxBQUdjLEFBQ2I7V0FBTyxFQUFFLGNBTEksQUFDZCxBQUlRLEFBQWdCO0FBSnhCLEFBQ0MsSUFGYTtZQU9kLEFBQ1MsQUFDUjtVQUZELEFBRU8sQUFDTjtpQkFWYSxBQU9kLEFBR2M7QUFIZCxBQUNDO1lBSUQsQUFDUyxBQUNSO1VBRkQsQUFFTyxBQUNOO2lCQWZhLEFBWWQsQUFHYztBQUhkLEFBQ0M7WUFJRCxBQUNTLEFBQ1I7VUFGRCxBQUVPLEFBQ047aUJBcEJhLEFBaUJkLEFBR2M7QUFIZCxBQUNDO1lBS1EsY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFNBRDVCLEFBQ1MsQUFBNEIsQUFDcEM7VUFGRCxBQUVPLEFBQ047aUJBekJELEFBQWMsQUFzQmQsQUFHYyxBQU1kO0FBVEEsQUFDQzs7d0NBUU0sQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtlQUFuQjtpQkFBUCxBQUFPLEFBQ1A7QUFETztJQUFBOzs7OzJCQUtDLEFBQ1I7MEJBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNBO0FBREE7QUFBQSxJQUFBLGtCQUNBLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREEsQUFDQSxBQUVBLG9DQUFBLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7ZUFBcEI7aUJBQUEsQUFDRTtBQURGO1dBREQsQUFDQyxBQUNFLEFBQUssQUFJUCxnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO2VBQXBCO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDLDBDQUFlLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DO2VBQXBDO2lCQVJILEFBQ0MsQUFNQyxBQUNDLEFBSUY7QUFKRTt5QkFJRCxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0E7QUFEQTtBQUFBLHNCQUNBLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0QztlQUFBO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxjQUFBOztlQUFBO2lCQUFBLEFBQ0E7QUFEQTtBQUFBLHNCQUNBLEFBQUMseUNBQU8sU0FBUjtlQUFBO2lCQUFBO0FBQUE7TUFwQkosQUFDQyxBQUdBLEFBWUMsQUFDQyxBQUNBLEFBQ0MsQUFDQSxBQVFKOzs7Ozt3R0FuRzRCLEE7Ozs7O1lBRTVCOztBQUNBO0FBQ007QSxtQkFBVyx3QkFBaUIsTUFBQSxBQUFNLE1BQXZCLEEsQUFBNkI7O2VBRXhCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEFBQThCLEE7O1lBQTlDO0EsMkJBQ047O2dCQUFBLEFBQVEsSUFBUixBQUFZLEFBRVo7O0FBQ0E7OztrQkFFVSxNQUFBLEFBQU0sTUFEVCxBQUNlLEFBQ3JCOzhCQUFxQixRQUZmLEFBRWUsQUFBUSxBQUM3QjtrQkFBUyxRQUhILEFBR0csQUFBUSxBQUNqQjt3QkFBZSxRQUpULEFBSVMsQUFBUSxBQUN2Qjt5QkFBZ0IsUUFMVixBQUtVLEFBQVEsQUFDeEI7a0JBQVMsUUFBQSxBLEFBTkgsQUFNVzs7QUFOWCxBQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYndCLEEsQUF1RzNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NhdHJpeW8vRG9jdW1lbnRzL0xlYXJuTm9kZUpTL0V0aGVyZXVtL2tpY2tzdGFydCJ9