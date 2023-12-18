import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const DateSelection = ({ selectedRoom, onNext, onBack }) => {
	const [dateRange, setDateRange] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);

	const handleSubmit = () => {
		// Validation logic here

		// Call the onNext function with dateRange to proceed to the next step
		onNext(dateRange);
	};

	return (
		<div>
			<h2>Select Stay Dates</h2>
			<DateRangePicker
				ranges={dateRange}
				onChange={(ranges) => setDateRange([ranges.selection])}
			/>
			<button onClick={handleSubmit}>Next</button>
			<button onClick={onBack}>Back</button>
		</div>
	);
};

export default DateSelection;
