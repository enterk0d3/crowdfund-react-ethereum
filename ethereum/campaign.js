import web3 from './web3';
import Campaign from './build/Campaign.json';


//Create a func that receive address to create campaign
//call with address, inside a function 
//create instance & return the instance(that point to address)
export default (address) => {
	return new web3.eth.Contract(
		JSON.parse(Campaign.interface),
		address
	);
}