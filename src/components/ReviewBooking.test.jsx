import { render, fireEvent } from "@testing-library/react";
import ReviewBooking from "./ReviewBooking";
import { expect, test } from "vitest";

test("ReviewBooking renders correctly", async () => {
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

	const selectedRoom = "Deluxe";

	const dateDetails = {
		startDate: new Date(),
		endDate: new Date(),
	};

	const totalCost = "150";

	const onBack = () => {};

	const { getByText, unmount } = render(
		<ReviewBooking
			petDetails={petDetails}
			selectedRoom={selectedRoom}
			dateDetails={dateDetails}
			totalCost={totalCost}
			onBack={onBack}
		/>
	);

	const linkElement = getByText(/Review Your Booking/i);
	expect(linkElement).toBeInTheDocument();

	const confirmButton = getByText(/Confirm Booking/i);
	fireEvent.click(confirmButton);

	const bookingConfirmation = getByText(/Booking Confirmed/i);
	expect(bookingConfirmation).toBeInTheDocument();
});
