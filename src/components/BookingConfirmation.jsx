const BookingConfirmation = ({ onConfirm }) => {
	return (
		<div>
			<h2>Booking Confirmed!</h2>
			<p>Your booking has been confirmed.</p>
			<button onClick={onConfirm}>Confirm</button>
		</div>
	);
};

export default BookingConfirmation;
