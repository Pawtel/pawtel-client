import { useState } from "react";
import BookingConfirmation from "./BookingConfirmation";

const ReviewBooking = ({
	petDetails,
	selectedRoom,
	dateDetails,
	totalCost,
	onBack,
}) => {
	const [bookingConfirmed, setBookingConfirmed] = useState(false);
	const createBookingEndpoint = "https://jsonplaceholder.typicode.com/posts"; // Replace with our actual API endpoint

	const handleConfirmBooking = async () => {
		try {
			const response = await fetch(createBookingEndpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					/* our booking data */
				}),
			});

			// Regardless of the response status, set bookingConfirmed to true
			setBookingConfirmed(true);

			if (!response.ok) {
				// Handle errors (e.g., display an error message)
				console.error("Failed to create booking:", response.statusText);
			}

			// Handle success...
		} catch (error) {
			console.error(
				"An error occurred during booking confirmation:",
				error
			);
		}
	};

	const handleBookingConfirmed = () => {
		console.log("Booking confirmed!.");
	};

	return (
		<div>
			{bookingConfirmed ? (
				<BookingConfirmation
					startDate={dateDetails.startDate.toDateString()}
					onConfirm={handleBookingConfirmed}
				/>
			) : (
				<>
					<div className="summary-container">
						<h1>Review Your Booking</h1>

						<div className="pet-details">
							<h3>Pet Details</h3>
							<p>
								<strong>Name:</strong> {petDetails.name}
							</p>
							<p>
								<strong>Animal Type:</strong>{" "}
								{petDetails.animalType}
							</p>
							<p>
								<strong>Breed:</strong> {petDetails.breed}
							</p>
							<p>
								<strong>Colour:</strong> {petDetails.color}
							</p>
							<p>
								<strong>Gender:</strong> {petDetails.gender}
							</p>
							<p>
								<strong>Age:</strong> {petDetails.age}
							</p>
							<p>
								<strong>Favourite Toys:</strong>{" "}
								{petDetails.favouriteToys.join(", ")}
							</p>
							<p>
								<strong>Dietary Requirements:</strong>{" "}
								{petDetails.dietaryRequirements.join(", ")}
							</p>
							<p>
								<strong>Allergies:</strong>{" "}
								{petDetails.allergies.join(", ")}
							</p>
						</div>

						<div className="room-selection">
							<h3>Room Selection</h3>
							<p>
								<strong>Selected Room:</strong> {selectedRoom}
							</p>
						</div>

						<div className="date-details">
							<h3>Date Details</h3>
							<p>
								<strong>Start Date:</strong>{" "}
								{dateDetails.startDate.toDateString()}
							</p>
							<p>
								<strong>End Date:</strong>{" "}
								{dateDetails.endDate.toDateString()}
							</p>
						</div>

						<div className="total-cost">
							<h3>Total Cost</h3>
							<p>
								<strong>${totalCost}</strong>
							</p>
						</div>
					</div>

					<div className="submit-buttons">
						<button className="submit-button" onClick={onBack}>
							Back
						</button>

						<button
							className="submit-button"
							onClick={handleConfirmBooking}
						>
							Confirm Booking
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default ReviewBooking;
