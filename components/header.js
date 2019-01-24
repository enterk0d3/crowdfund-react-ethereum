import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';
//2 curly braces at Menu to add custom CSS style, 
//first {} to indicate its JS, 2nd {} object literal we create
export default () => {
	return (
		<Menu style={{ marginTop: '10px' }}>
			<Link route='/'>
				<a className="item"> NasdemCoin
				</a>
			</Link>

			<Menu.Item>
				Prananda Coin
			</Menu.Item>

			<Menu.Menu position="right">

			<Link route="/">
				<a className="item"> Campaign
				</a>
			</Link>

			<Link route='/campaigns/new'>
				<a className="item"> +
				</a>
			</Link>

			</Menu.Menu>
		</Menu>
	);
};