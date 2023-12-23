// Importing testing utilities from testing libraries and the component to be tested
import { render, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import DateSelection from "./DateSelection";
import { DateRangePicker } from "../mocks";

// Test case to check if DateSelection component renders correctly
test("DateSelection renders correctly", async () => {
	// Mock functions for callbacks and calculations
	const onNext = () => {};
	const onBack = () => {};
	const calculateTotalCost = () => {};

	// Rendering the DateSelection component with mock props
	const { getByText, unmount } = render(
		<DateSelection
			onNext={onNext}
			onBack={onBack}
			calculateTotalCost={calculateTotalCost}
			selectedRoom={{}}
		/>
	);

	// Asserting that specific text content is present in the rendered component
	expect(getByText("Select Stay Dates")).toBeInTheDocument();
	expect(getByText("Back")).toBeInTheDocument();
	expect(getByText("Next")).toBeInTheDocument();

	// Unmounting the component after the test case
	unmount();
});

// Test case to check if onBack and onNext are called on button click
test("DateSelection calls onBack and onNext on button click", async () => {
	// Flags to track whether onNext and onBack functions are called
	let onNextCalled = false;
	let onBackCalled = false;

	// Mock functions for callbacks and calculations
	const onNext = () => {
		onNextCalled = true;
	};
	const onBack = () => {
		onBackCalled = true;
	};
	const calculateTotalCost = () => {};

	// Rendering the DateSelection component with mock props
	const { getAllByText, unmount } = render(
		<DateSelection
			onNext={onNext}
			onBack={onBack}
			calculateTotalCost={calculateTotalCost}
			selectedRoom={{}}
		/>
	);

	// Triggering click events on "Back" buttons and asserting that onBack is called
	const backButtons = getAllByText("Back");
	backButtons.forEach((button) => {
		fireEvent.click(button);
	});
	expect(onBackCalled).toBe(true);

	// Triggering click events on "Next" buttons and asserting that onNext is called
	const nextButtons = getAllByText("Next");
	nextButtons.forEach((button) => {
		fireEvent.click(button);
	});
	expect(onNextCalled).toBe(true);

	// Unmounting the component after the test case
	unmount();
});
