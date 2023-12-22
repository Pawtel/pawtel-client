// Import necessary libraries and components
import { render, fireEvent } from "@testing-library/react";
import { test, expect } from "vitest";
import RoomSelection from "./RoomSelection";

// Test to check if the RoomSelection component renders correctly
test("RoomSelection renders correctly", async () => {
	// Define mock functions for the props
	const onNext = () => {};
	const onBack = () => {};
	const calculateRoomCost = () => {};

	// Render the RoomSelection component with the mock props
	const { getByText, unmount } = render(
		<RoomSelection
			onNext={onNext}
			onBack={onBack}
			calculateRoomCost={calculateRoomCost}
		/>
	);

	// Check if the expected elements are in the document
	expect(getByText("Select a room")).toBeInTheDocument();
	expect(getByText("Back")).toBeInTheDocument();
	expect(getByText("Next")).toBeInTheDocument();

	// Unmount the component after the test
	unmount();
});

// Test to check if the onNext and onBack functions are called when the corresponding buttons are clicked
test("RoomSelection calls onBack and onNext on button click", async () => {
	// Define variables to track if the functions are called
	let onNextCalled = false;
	let onBackCalled = false;

	// Define mock functions that update the tracking variables when called
	const onNext = () => {
		onNextCalled = true;
	};
	const onBack = () => {
		onBackCalled = true;
	};
	const calculateRoomCost = () => {};

	// Render the RoomSelection component with the mock props
	const { getAllByText, unmount } = render(
		<RoomSelection
			onNext={onNext}
			onBack={onBack}
			calculateRoomCost={calculateRoomCost}
		/>
	);

	// Get all elements with the text "Back" and click each of them
	const backButtons = getAllByText("Back");
	backButtons.forEach((button) => {
		fireEvent.click(button);
	});
	// Check if the onBack function was called
	expect(onBackCalled).toBe(true);

	// Get all elements with the text "Next" and click each of them
	const nextButtons = getAllByText("Next");
	nextButtons.forEach((button) => {
		fireEvent.click(button);
	});
	// Check if the onNext function was called
	expect(onNextCalled).toBe(true);

	// Unmount the component after the test
	unmount();
});
