//import the instance
import web3 from './web3';

//import interface/ABI
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0xEd0bf69618aB62Fb3B434103048433282b4eB3a0'
);

export default instance;