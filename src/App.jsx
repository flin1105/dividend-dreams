import { useState } from "react";
import "./App.css";
import AddPosition from "./Components/AddPosition";

const HEADERS = [
	"Ticker",
	"Name",
	"Shares",
	"Cost per Share",
	"Cost Basis",
	"Market Value",
];

const POSITIONS = [
	{ id: 1, ticker: "SCHD", shares: 100, cost_Basis: 25.0 },
	{ id: 2, ticker: "VYM", shares: 50, cost_Basis: 50 },
];

function App() {
	const [currentPositions, setCurrentPositions] = useState(POSITIONS);

	return (
		<>
			<h1>Dividend Dreams</h1>
			<div className="card">
				<table>
					<thead>
						<tr>
							{HEADERS.map((header, index) => (
								<th key={index}>{header}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{currentPositions.map((position) => (
							<tr key={position.id}>
								<td>{position.ticker}</td>
								<td>Feature not yet available</td>
								<td>{position.shares}</td>
								<td>{position.cost_Basis}</td>
								<td>{position.shares * position.cost_Basis}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<AddPosition
				currentPositions={currentPositions}
				setCurrentPositions={setCurrentPositions}
			/>
		</>
	);
}

export default App;
