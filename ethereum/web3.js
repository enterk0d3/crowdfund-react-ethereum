import Web3 from 'web3';

//assume web3 already injected on browser
//will error when execute at server next js if using window
// const web3 = new Web3(window.web3.currentProvider);


let web3;

if (typeof window !== 'undefined' && typeof window.web3 !=='undefined') { 
	//we are in the browser & metamask is running
	web3 = new Web3(window.web3.currentProvider);
} else {
	//we are on the server OR the user is not running metamask
	const provider = new Web3.providers.HttpProvider(
		'https://rinkeby.infura.io/v3/dcfb09468dd44bc1ac5a5c6ed5d25285'
	);
	web3 = new Web3(provider);
}	


export default web3;