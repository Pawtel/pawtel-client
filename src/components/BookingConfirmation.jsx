const BookingConfirmation = ({ startDate }) => {
	return (
		<div>
			<h2>Booking Confirmed!</h2>
			<p>Your booking has been confirmed.</p>
			<p>We will see you on {startDate}!</p>
		</div>
	);
};

export default BookingConfirmation;
