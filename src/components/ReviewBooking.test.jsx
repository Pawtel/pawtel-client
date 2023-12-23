import { render, fireEvent, waitFor } from "@testing-library/react";
import ReviewBooking from "./ReviewBooking";
import { expect, test } from "vitest";

// Define a test for the ReviewBooking component
test("ReviewBooking renders correctly", async () => {
	// Define mock data for the petDetails prop
	const petDetails = {
		name: "Buddy",
		animalType: "Dog",
		breed: "Labrador",
		colour: "Golden",
		gender: "Male",
		age: "5",
		favouriteToys: ["Ball"],
		dietaryRequirements: ["None"],
		allergies: ["None"],
	};

	// Define mock data for the selectedRoom prop
	const selectedRoom = "Deluxe";

	// Define mock data for the dateDetails prop
	const dateDetails = {
		startDate: new Date(),
		endDate: new Date(),
	};

	// Define mock data for the totalCost prop
	const totalCost = "150";

	// Define a mock function for the onBack prop
	const onBack = () => {};

	// Render the ReviewBooking component with the mock data and function
	const { getByText } = render(
		<ReviewBooking
			petDetails={petDetails}
			selectedRoom={selectedRoom}
			dateDetails={dateDetails}
			totalCost={totalCost}
			onBack={onBack}
		/>
	);

	// Check if the "Review Your Booking" text is in the document
	const linkElement = getByText(/Review Your Booking/i);
	expect(linkElement).toBeInTheDocument();

	// Find the "Confirm Booking" button and click it
	const confirmButton = getByText(/Confirm Booking/i);
	fireEvent.click(confirmButton);

	// Check if the "Booking Confirmed" text is in the document
	await waitFor(() => getByText(/Booking Confirmed/i));
});
