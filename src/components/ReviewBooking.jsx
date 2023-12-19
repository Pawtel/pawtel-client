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
		// API endpoint to handle booking submissions
		const apiUrl = "https://your-api-endpoint.com/bookings";

		try {
			const response = await fetch(apiUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					petDetails,
					selectedRoom,
					dateDetails,
					totalCost,
				}),
			});

			if (response.ok) {
				setBookingConfirmed(true);
			} else {
				console.error("Failed to submit booking:", response.statusText);
			}
		} catch (error) {
			console.error("Error during booking submission:", error.message);
		}
	};

	return (
		<div>
			<button onClick={onBack}>Back</button>

			{bookingConfirmed ? (
				<BookingConfirmation />
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
