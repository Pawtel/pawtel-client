const ReviewBooking = ({
	petDetails,
	selectedRoom,
	dateDetails,
	totalCost,
	onBack,
}) => {
	return (
		<div>
			<button onClick={onBack}>Back</button>

			{/* Render a summary of pet details, room selection, date details, and total cost */}
			<h2>Review Your Booking</h2>
			<div>
				<h3>Pet Details</h3>
				<p>Animal Type: {petDetails.animalType}</p>
				<p>Name: {petDetails.name}</p>
				{/* Add more pet details as needed */}
			</div>

			<div>
				<h3>Room Selection</h3>
				<p>Selected Room: {selectedRoom}</p>
			</div>

			<div>
				<h3>Date Details</h3>
				{/* Display the start and end dates or date range */}
				<p>Start Date: {dateDetails.startDate.toDateString()}</p>
				<p>End Date: {dateDetails.endDate.toDateString()}</p>
			</div>

			<div>
				<h3>Total Cost</h3>
				<p>${totalCost}</p>
			</div>
		</div>
	);
};

export default ReviewBooking;
