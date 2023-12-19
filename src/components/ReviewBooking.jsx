import React, { useState } from "react";
import BookingConfirmation from "./BookingConfirmation";

const ReviewBooking = ({
	petDetails,
	selectedRoom,
	dateDetails,
	totalCost,
	onBack,
}) => {
	const [bookingConfirmed, setBookingConfirmed] = useState(false);
	const handleConfirmBooking = async () => {
		// Assume a successful booking submission for demonstration purposes
		setBookingConfirmed(true);
	};

	const handleBookingConfirmed = () => {
		// Handle the booking confirmation (e.g., update state, navigate to a new page)
		// For demonstration, let's just log a message to the console
		console.log(
			"Booking confirmed! You can handle navigation or state update here."
		);
	};

	return (
		<div>
			<button onClick={onBack}>Back</button>

			{bookingConfirmed ? (
				<BookingConfirmation
					startDate={dateDetails.startDate.toDateString()}
					onConfirm={handleBookingConfirmed}
				/>
			) : (
				<>
					{/* Render a summary of pet details, room selection, date details, and total cost */}
					<h2>Review Your Booking</h2>
					<p>Name: {petDetails.name}</p>
					<p>Animal Type: {petDetails.animalType}</p>
					<p>Breed: {petDetails.breed}</p>
					<p>Colour: {petDetails.color}</p>
					<p>Gender {petDetails.gender}</p>
					<p>Age: {petDetails.age}</p>
					<p>Favourite Toys: {petDetails.favouriteToys}</p>
					<p>
						Dietary Requirements: {petDetails.dietaryRequirements}
					</p>
					<p>Allergies: {petDetails.allergies}</p>

					<div>
						<h3>Room Selection</h3>
						<p>Selected Room: {selectedRoom}</p>
					</div>

					<div>
						<h3>Date Details</h3>
						{/* Display the start and end dates or date range */}
						<p>
							Start Date: {dateDetails.startDate.toDateString()}
						</p>
						<p>End Date: {dateDetails.endDate.toDateString()}</p>
					</div>

					<div>
						<h3>Total Cost</h3>
						<p>${totalCost}</p>
					</div>

					<button onClick={handleConfirmBooking}>
						Confirm Booking
					</button>
				</>
			)}
		</div>
	);
};

export default ReviewBooking;
