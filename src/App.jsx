import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const HEADERS = [
	"Ticker",
	"Name",
	"Shares",
	"Cost per Share",
	"Cost Basis",
	"Market Value",
];

function App() {
	const [tickers, setTickers] = useState(["SCHD", "VYM"]);

	return (
		<>
			<div>
				<a
					href="https://vitejs.dev"
					target="_blank"
				>
					<img
						src={viteLogo}
						className="logo"
						alt="Vite logo"
					/>
				</a>
				<a
					href="https://react.dev"
					target="_blank"
				>
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Dividend Dreams</h1>
			<div className="card">
				<table>
					<thead>
						<tr>
							{" "}
							{HEADERS.map((header, index) => (
								<th key={index}>{header}</th>
							))}
						</tr>
					</thead>
					<tbody>
						<tr>
							{tickers.map((ticker, index) => (
								<tr key={index}>
									<td>{ticker}</td>
								</tr>
							))}
						</tr>
						<tr>
							<td>test row</td>
						</tr>
					</tbody>
				</table>
			</div>
			<form>
				<label htmlFor="ticker">Ticker: </label>
				<input
					type="text"
					id="ticker"
					name="ticker"
				></input>
				<label htmlFor="numberOfShares">Number of Shares </label>
				<input
					type="number"
					id="numberOfShares"
					name="numberOfShares"
					min="0"
				></input>
				<label htmlFor="costBasis">Cost Basis per Share </label>
				<input
					type="number"
					id="costBasis"
					name="costBasis"
					min="0"
				></input>
			</form>
		</>
	);
}

export default App;
