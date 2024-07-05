import React from "react";

const PositionRow = ({ position, rowNumber }) => {
	console.log("position", { position });
	return (
		<tr>
			<td>{rowNumber + 1}</td>
			<td>{position.ticker}</td>
			<td>Feature not yet available</td>
			<td>{position.shares}</td>
			<td>{position.cost_Basis}</td>
			<td>{position.shares * position.cost_Basis}</td>
			<td>Market Value Placeholder</td>
			<td>
				<button>X</button>
			</td>
		</tr>
	);
};

export default PositionRow;
