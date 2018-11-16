const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

//import 2 compiled contracts
const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

//reusable variables
let accounts;
let factory; //reference to deployed instance of factory
let campaignAddress;
let campaign; //hold the instance of the campaign

//mostly for test the campaign instance at "it", declare at beforeEach
//no need to make factory instance at "it" and create campaign
beforeEach(async () => {
	accounts = await web3.eth.getAccounts();
	//use account to deploy new instance of factory 
	//use contract constructor part of web3.eth
	//pass interface(ABI) of compiledFactory
	//parse JSON to JS object
	factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
		.deploy( {data: compiledFactory.bytecode})
		.send( {from:accounts[0], gas:'1000000'} );
	
	//use factory to create instance campaign
	await factory.methods.createCampaign('100').send({
	from: accounts[0], //manager of the campaign
	gas: '1000000'
	});

	//call the first element of array 
	[campaignAddress] = await factory.methods.getDeployedCampaign().call();
	//alternatively can be replace ES2015 [campaignAddress] destructuring array  	

	//instruct web3 create JS representation of contract & trying to access the campaignAddress
	campaign = await new web3.eth.Contract(
		JSON.parse(compiledCampaign.interface),
		campaignAddress
	);
});


describe('Campaigns', () => {
	it('deploys factory & campaign', () => {
		assert.ok(factory.options.address);
		assert.ok(campaign.options.address);
	});

	it('creator of campaign is manager', async () => {
		const manager = await campaign.methods.manager().call();
		assert.equal(accounts[0], manager);
	});

	it('allow to contribute and mark them as approver', async () => {
		await campaign.methods.contribute().send({
			value: '200',
			from: accounts[1]
		});
		const isContributor = await campaign.methods.approvers(accounts[1]).call();
		assert(isContributor);
	});
	//try to fail
	it ('requires a minimum contribution', async () => {
		try {
			await campaign.methods.contribute().send({
				value: '10',
				from: accounts[1]
			});

			assert(false);
		} catch (err) {
			assert(err);
		}
	});

	it('allows a manager to make payment request', async () => {
		await campaign.methods
			.createRequest('Buy Coffee', '100', accounts[1])
			.send({
				from: accounts[0],
				gas: '1000000'
			});

		const request = await campaign.methods.requests(0).call();

		assert.equal('Buy Coffee', request.description);
	})

	it('processes requests', async () => {

		await campaign.methods.contribute().send({
			from: accounts[0],
			value: web3.utils.toWei('10', 'ether')
		});

		await campaign.methods
			.createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1])
			.send({
				from: accounts[0],
				gas: '1000000'
		});

		await campaign.methods.approveRequest(0).send({
			from: accounts[0],
			gas: '1000000'
		});

		await campaign.methods.finalizeRequest(0).send({
			from: accounts[0],
			gas:'1000000'
		});
		let balance = await web3.eth.getBalance(accounts[1]);
		balance = web3.utils.fromWei(balance, 'ether');
		balance = parseFloat(balance);
		console.log(balance);

		assert(balance > 104);
	})
});
















