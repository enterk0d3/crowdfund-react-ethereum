'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import the instance
var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0xEd0bf69618aB62Fb3B434103048433282b4eB3a0');

//import interface/ABI
exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNhbXBhaWduRmFjdG9yeSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLEFBQU8sQUFBVTs7OztBQUdqQixBQUFPLEFBQXFCOzs7Ozs7QUFKNUI7QUFNQSxJQUFNLFdBQVcsSUFBSSxjQUFBLEFBQUssSUFBVCxBQUFhLFNBQzdCLEtBQUEsQUFBSyxNQUFNLDBCQURLLEFBQ2hCLEFBQTJCLFlBRDVCLEFBQWlCLEFBRWhCLEFBR0Q7O0FBUkE7a0JBUUEsQUFBZSIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYXRyaXlvL0RvY3VtZW50cy9MZWFybk5vZGVKUy9FdGhlcmV1bS9raWNrc3RhcnQifQ==