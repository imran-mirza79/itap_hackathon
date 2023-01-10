import React, { useState, useEffect } from "react";
import { Container, Header, Label, Segment } from "semantic-ui-react";
import { app, database } from "../../firebase-config";
import { ref, onValue, get, child } from "firebase/database";
import "./Stock.css";
// import Navbar from "../Navbar/Navbar";

const Stock = ({ tickerName }) => {
    const [ stockData, setstockData ] = useState({});
	const fetchData = async () => {
		const dbRef = ref(database);
		get(child(dbRef, `XOM`))
			.then((snapshot) => {
				if (snapshot.exists()) {
					setstockData(snapshot.val());
					// console.log(snapshot.val());
					// console.log(stockData);
				} else {
					console.log("No data available");
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	useEffect(() => {
		fetchData();
    }, []);
    
    const metrics = [
		{
			id: 1,
			riskLevel: "High",
			metricName: "Var",
			value: 2.012,
		},

		{
			id: 2,
			riskLevel: "Low",
			metricName: "Something",
			value: 1.012,
		},

		{
			id: 3,
			riskLevel: "High",
			metricName: "Something Else",
			value: 0.012,
        }
    ];
    const overAllRisk = 'High Risk'

	return (
		<>
			<div className="ui fluid container">
				<Container fluid className="stockContainer">
					<Header as={"h1"} className="stockHeader">
						{tickerName}
					</Header>

					<div fluid className="containerBox">
						<Header as={"h1"} className="stockHeader">
							Price Summary
						</Header>
						<p className="stockFlex">
							<h4 className="stockDetails">
								<h5>Geometric Mean</h5>
								{parseFloat(stockData.geometric_mean).toFixed(
									3
								)}
							</h4>
							<h4 className="stockDetails">
								<h5>Geometric Mean</h5>
								{parseFloat(stockData.one_day_var_1).toFixed(3)}
							</h4>
							<h4 className="stockDetails">
								<h5>Geometric Mean</h5>
								{parseFloat(stockData.one_day_var_5).toFixed(3)}
							</h4>
							<h4 className="stockDetails">
								<h5>Geometric Mean</h5>
								{parseFloat(
									stockData.standard_deviation
								).toFixed(3)}
							</h4>
						</p>
					</div>

					<div fluid className="riskContainer">
						<Header as={"hi"} className="stockHeader">
							Risk Analysis
						</Header>
						<Label as="h1" color="red" tag>
							{overAllRisk}
						</Label>

						<div className="flexWrapper">
							{metrics.map((metric) => (
								<div className="varRisk">
									<Segment raised className="varSegment">
										<Label
											as="a"
											color={
												metric.riskLevel === "High"
													? "red"
													: "green"
											}
											ribbon
										>
											{metric.riskLevel === "High"
												? "Below Par"
												: "Doing Good"}
										</Label>
										<span>{metric.name}</span>
									</Segment>
									<Header as={"h3"} className="varHeader">
										{metric.value}
									</Header>
								</div>
							))}
						</div>
					</div>
				</Container>
			</div>
		</>
	);
};

export default Stock;
