import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { act } from "react-dom/test-utils";
import Login from "./Login";

// set the mock adapter on the default instance
let mock = new MockAdapter(axios);

// Mock any POST request to api/login
// arguments for reply are (status, data, headers)
mock.onPost("/api/login").reply(200, {
	jwt: "mock-jwt-token",
});

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

	// Simulate user typing events
	await userEvent.type(emailInput, "test@example.com");
	await userEvent.type(passwordInput, "password");

	await act(async () => {
		// Simulate a click event on the sign-in button
		await userEvent.click(signInButton);
	});

	expect(emailInput).toHaveAttribute("value", "test@example.com");
	expect(passwordInput).toHaveAttribute("value", "password");
	// Simulate a click event on the sign-in button
});
