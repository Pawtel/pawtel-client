const BookingConfirmation = ({ startDate }) => {
	return (
		<>
			<h1>Booking Confirmed!</h1>
			<div className="confirmation-container">
				<h2 className="confirm-message">
					We will see you on {startDate}!
				</h2>
				<h5>You may safetly exit this window.</h5>
			</div>
		</>
	);
};

export default BookingConfirmation;
