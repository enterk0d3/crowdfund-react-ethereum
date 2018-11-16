import React from 'react';
import Header from'./header';
//import helper from NextJS
import Head from 'next/head';
import { Container } from 'semantic-ui-react';

export default props => {
//directly export a functional component	
//usually helper functions/ component state
	return (
	<Container>
		<Head> 
			<link 
				rel="stylesheet" 
				href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css">
			</link>
		</Head>
		<Header />
		{props.children}
	</Container>	
	);
};