// Import necessary libraries and components
import { render, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PetDetailsForm from "./PetDetailsForm";

// Start of test suite for PetDetailsForm component
describe("PetDetailsForm", () => {
	// Test case to check if the form renders correctly
	it("renders correctly", () => {
		// Mock function for onNext prop
		const onNext = () => {};

		// Render the component and get the required utilities
		const { getByLabelText, getByText, unmount } = render(
			<PetDetailsForm onNext={onNext} />
		);

		// Check if all the form fields and the Next button are present in the document
		expect(getByLabelText("Animal Type:")).toBeInTheDocument();
		expect(getByLabelText("Name:")).toBeInTheDocument();
		expect(getByLabelText("Breed:")).toBeInTheDocument();
		expect(getByText("Next")).toBeInTheDocument();

		// Clean up the DOM after the test is finished
		unmount();
	});

	// Test case to check if the onNext function is called when the form is submitted
	it("calls onNext when the form is submitted", () => {
		// Flag to track if onNext is called
		let onNextCalled = false;

		// Function to set the flag to true when onNext is called
		const onNext = () => {
			onNextCalled = true;
		};

		// Render the component and get the required utilities
		const { getByText, unmount } = render(
			<PetDetailsForm onNext={onNext} />
		);

		// Get the submit button
		const submitButton = getByText("Next");

		// Simulate a click event on the submit button
		fireEvent.click(submitButton);

		// Check if the onNext function was called (i.e., if the flag is true)
		expect(onNextCalled).toBe(true);

		// Clean up the DOM after the test is finished
		unmount();
	});
});
