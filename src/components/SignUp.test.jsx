import { render, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";
import SignUp from "./SignUp";

describe("SignUp", () => {
	it("renders correctly", () => {
		const { getByLabelText, getByText, unmount } = render(
			<Router>
				<SignUp />
			</Router>
		);

		expect(getByLabelText("First Name:")).toBeInTheDocument();
		expect(getByLabelText("Last Name:")).toBeInTheDocument();
		expect(getByLabelText("Address:")).toBeInTheDocument();
		expect(getByLabelText("Email:")).toBeInTheDocument();
		expect(getByLabelText("Username:")).toBeInTheDocument();
		expect(getByLabelText("Password:")).toBeInTheDocument();
		expect(getByText("Create User")).toBeInTheDocument();

		// Call unmount to clean up the DOM after the test is finished.
		unmount();
	});

	it("calls handleSignUp on button click", () => {
		const { getByText, unmount } = render(
			<Router>
				<SignUp />
			</Router>
		);
		const signUpButton = getByText("Create User");

		fireEvent.click(signUpButton);

		unmount();
	});
});
