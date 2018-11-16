import React, {Component} from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/layout';
import { Link } from '../routes';


class CampaignIndex extends Component {
	// async componentDidMount() {
	// 	const campaigns = await factory.methods.getDeployedCampaign().call();
	// 	console.log(campaigns);
	// }

	//not use because NextJS specification

	//use method exclusively for NextJS for initial data loading
	//NextJS will first render the getInitialProps methods only
	//return some data and provided to actual CampaignIndex component

	//static keyword, not assign function to instance but the class itself
	//define at NextJS spec to not render component just to call the function, more efficient

	static async getInitialProps() { //static not making instance to call function
		const campaigns = await factory.methods.getDeployedCampaign().call();

		return {campaigns: campaigns};  //{campaigns} //ES2015
		//must return an object for this getInitialProps func
		//object will be provided for component as props
	}


	//take every campaign get from campaign factory
	//loop over the array of addresses  
	//and for each address build an object (represent card)
	//every object have header, description, etc

	renderCampaigns() {
		const item = this.props.campaigns.map(address => {
			return {
				header: address,
				description: (
					<Link route={`/campaigns/${address}`}>
					<a>View Campaign</a>
					</Link>
					),
				fluid: true
			};
		});
	//above is take array of addresses and transform it to array of objects
	//pass the array of objects as items property
		return <Card.Group items={item} />
	}


	render(){
		return (
			<Layout>
				<div>
					<h3> Open Campaigns </h3>

					<Link route="/campaigns/new">
					<a>
						<Button
						floated="right"
						content="Create Campaign"
						icon="add circle"
						primary 
						/>
					</a>	
					</Link>

					{this.renderCampaigns()}
					
				</div>
			</Layout>
		);
	}
}

export default CampaignIndex;