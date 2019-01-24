'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Campaign = require('./build/Campaign.json');

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Create a func that receive address to create campaign
//call with address, inside a function 
//create instance & return the instance(that point to address)
exports.default = function (address) {
	return new _web2.default.eth.Contract(JSON.parse(_Campaign2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2NhbXBhaWduLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbiIsImFkZHJlc3MiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQXFCLEFBQXJCOzs7Ozs7QUFHQTtBQUNBO0FBQ0EsQUFDQTtrQkFBZSxVQUFDLEFBQUQsU0FBYSxBQUMzQjtRQUFPLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNOLEtBQUssQUFBTCxNQUFXLG1CQUFTLEFBQXBCLEFBRE0sWUFFTixBQUZNLEFBQVAsQUFJQTtBQUxEIiwiZmlsZSI6ImNhbXBhaWduLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYXRyaXlvL0RvY3VtZW50cy9kZXYvY29kZS1ub2RlSlMvRXRoZXJldW0va2lja3N0YXJ0In0=