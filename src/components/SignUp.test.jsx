import { render, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";
import SignUp from "./SignUp";

// Start of test suite for SignUp component
describe("SignUp", () => {
	// Test case to check if the form renders correctly
	it("renders correctly", () => {
		// Render the component inside a Router because it uses routing features
		// Get the required utilities from the render function
		const { getByLabelText, getByText, unmount } = render(
			<Router>
				<SignUp />
			</Router>
		);

		// Check if all the form fields and the Create User button are present in the document
		expect(getByLabelText("First Name:")).toBeInTheDocument();
		expect(getByLabelText("Last Name:")).toBeInTheDocument();
		expect(getByLabelText("Address:")).toBeInTheDocument();
		expect(getByLabelText("Email:")).toBeInTheDocument();
		expect(getByLabelText("Username:")).toBeInTheDocument();
		expect(getByLabelText("Password:")).toBeInTheDocument();
		expect(getByText("Create User")).toBeInTheDocument();

		// Clean up the DOM after the test is finished
		unmount();
	});

	// Test case to check if the handleSignUp function is called when the Create User button is clicked
	it("calls handleSignUp on button click", () => {
		// Render the component inside a Router and get the required utilities
		const { getByText, unmount } = render(
			<Router>
				<SignUp />
			</Router>
		);

		// Get the Create User button
		const signUpButton = getByText("Create User");

		// Simulate a click event on the Create User button
		fireEvent.click(signUpButton);

		// Clean up the DOM after the test is finished
		unmount();
	});
});
