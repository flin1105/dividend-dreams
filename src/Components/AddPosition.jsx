import React, { useState } from "react";

const AddPosition = ({ currentPositions, setCurrentPositions }) => {
	const [ticker, setTicker] = useState("");
	const [shares, setShares] = useState("");
	const [costBasis, setCostBasis] = useState("");

	function handleAddNewPosition(event) {
		event.preventDefault();
		const newId = crypto.randomUUID();
		const newPositions = [
			...currentPositions,
			{
				id: newId,
				ticker: ticker,
				shares: shares,
				cost_Basis: costBasis,
			},
		];
		setCurrentPositions(newPositions);
		setTicker("");
		setShares("");
		setCostBasis("");
	}

	return (
		<form onSubmit={handleAddNewPosition}>
			<label htmlFor="ticker">Ticker: </label>
			<input
				type="text"
				id="ticker"
				name="ticker"
				value={ticker}
				onChange={(event) => setTicker(event.target.value)}
			></input>
			<label htmlFor="numberOfShares">Number of Shares </label>
			<input
				type="number"
				id="numberOfShares"
				name="numberOfShares"
				min="0"
				value={shares}
				onChange={(event) => setShares(event.target.value)}
			></input>
			<label htmlFor="costBasis">Cost Basis per Share </label>
			<input
				type="number"
				id="costBasis"
				name="costBasis"
				min="0"
				value={costBasis}
				onChange={(event) => setCostBasis(event.target.value)}
			></input>
			<input
				type="submit"
				value="Submit"
			></input>
		</form>
	);
};

export default AddPosition;
