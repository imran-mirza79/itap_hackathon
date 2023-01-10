import React from 'react';
import { Image, Header } from 'semantic-ui-react';
import dummy from '../../images/dummy.png'
import './Graph.css'

const Graph = () => {
    return (
		<div className="imageContainer">
			<Header as={"h3"}>Var Vs MDD</Header>
			<Image src={dummy} size="large" rounded className="image" />
			<Header as={"h3"}>Var Vs MDD</Header>
			<Image src={dummy} size="large" rounded className="image" />
			{/*<Header as={"h3"}>Var Vs MDD</Header>
    <Image src={dummy} size="large" rounded className="image" />*/}
		</div>
	);
};

export default Graph;