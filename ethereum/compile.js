const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');


//delete build directory
const buildPath = path.resolve(__dirname,'build');
fs.removeSync(buildPath);

//read Campaign.sol
const campaignPath = path.resolve(__dirname,'contracts','Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');

//compile both contracts
const output = solc.compile(source, 1).contracts; //only contracts property

//write output to build directory as JSON file
fs.ensureDirSync(buildPath); //make dir if not there


//console.log(output);
for (let contract in output) { //iterate keys in object 
	fs.outputJsonSync (
		path.resolve(buildPath, contract.replace(':','') + '.json'),
		output[contract]
	);
}