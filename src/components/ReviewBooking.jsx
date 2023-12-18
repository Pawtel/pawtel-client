const ReviewBooking = ({
	petDetails,
	selectedRoom /* Add date details and cost */,
	onBack,
}) => {
	return (
		<div>
			<button onClick={onBack}>Back</button>

			{/* Render a summary of pet details, room selection, date details, and total cost */}
		</div>
	);
};

export default ReviewBooking;
