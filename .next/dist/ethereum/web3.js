'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//assume web3 already injected on browser
//will error when execute at server next js if using window
// const web3 = new Web3(window.web3.currentProvider);


var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	//we are in the browser & metamask is running
	web3 = new _web2.default(window.web3.currentProvider);
} else {
	//we are on the server OR the user is not running metamask
	var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/dcfb09468dd44bc1ac5a5c6ed5d25285');
	web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLElBQUksWUFBSjs7QUFFQSxJQUFJLE9BQU8sQUFBUCxXQUFrQixBQUFsQixlQUFpQyxPQUFPLE9BQU8sQUFBZCxTQUFzQixBQUEzRCxhQUF3RSxBQUN2RTtBQUNBO1FBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFDQTtBQUhELE9BR08sQUFDTjtBQUNBO0tBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxVQUFlLEFBQW5CLGFBQ2hCLEFBRGdCLEFBQWpCLEFBR0E7UUFBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0E7QUFHRDs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYXRyaXlvL0RvY3VtZW50cy9kZXYvY29kZS1ub2RlSlMvRXRoZXJldW0va2lja3N0YXJ0In0=