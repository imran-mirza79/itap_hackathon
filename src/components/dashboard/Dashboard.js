import React from "react";
import Stock from "../Stock/Stock";
import Graph from "../Graph/Graph";

import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {
	const name = "MSFT";

	return (
		<>
			<Navbar />
			<div className="dashContainer">
				<Stock tickerName={name} />
				<Graph />
			</div>
		</>
	);
};

export default Dashboard;
