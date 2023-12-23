import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "../styles/calender.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css fileimport

const DateSelection = ({
	onNext,
	onBack,
	calculateTotalCost,
	selectedRoom,
}) => {
	const [dateRange, setDateRange] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);

	const handleSubmit = () => {
		if (dateRange && Array.isArray(dateRange) && dateRange[0]) {
			const startDate = dateRange[0].startDate;
			const endDate = dateRange[0].endDate;

			// Calculate the total cost based on the selected room and date range
			const totalCost = calculateTotalCost(
				startDate,
				endDate,
				selectedRoom
			);

			// Call the onNext function with dateRange and totalCost to proceed to the next step
			onNext({ startDate, endDate, totalCost });
		} else {
			console.error("Invalid dateRange:", dateRange);
		}
	};

	return (
		<>
			<h1>Select Stay Dates</h1>
			<div className="calender-container">
				<DateRangePicker
					ranges={dateRange}
					onChange={(ranges) => setDateRange([ranges.selection])}
				/>
			</div>
			<div className="submit-buttons">
				<button className="submit-button" onClick={onBack}>
					Back
				</button>
				<button className="submit-button" onClick={handleSubmit}>
					Next
				</button>
			</div>
		</>
	);
};

export default DateSelection;
