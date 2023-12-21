import { test, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

// Define a test for the Login component
test("renders Login component", async () => {
	// Render the Login component inside a MemoryRouter to provide routing context
	render(
		<MemoryRouter>
			<Login />
		</MemoryRouter>
	);

	// Access elements from the rendered output using their accessible roles
	const emailInput = screen.getByLabelText("Email:");
	const passwordInput = screen.getByLabelText("Password:");
	const signInButton = screen.getByRole("button", { name: /sign in/i });

	// Use expect to make assertions that these elements are in the document
	expect(emailInput).toBeTruthy();
	expect(passwordInput).toBeTruthy();
	expect(signInButton).toBeTruthy();

	// Simulate user typing events
	await userEvent.type(emailInput, "test@example.com");
	await userEvent.type(passwordInput, "password");

	// Make assertions based on the events
	// Check that the input fields have the correct values after typing
	expect(emailInput).toHaveAttribute("value", "test@example.com");
	expect(passwordInput).toHaveAttribute("value", "password");

	// Simulate a click event on the sign in button
	userEvent.click(signInButton);

	// Wait for state updates to be applied
	await waitFor(() => {
		// Make assertions based on the events after clicking the sign in button
		// Check that the input fields are cleared
		expect(emailInput).toHaveAttribute("value", "");
		expect(passwordInput).toHaveAttribute("value", "");
	});
});
