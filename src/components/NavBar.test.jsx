import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";
import { expect, test } from "vitest";

test("NavBar renders correctly", async () => {
	// Render the NavBar component within a MemoryRouter to provide context for the Link components
	const { getByText, unmount } = render(
		<MemoryRouter>
			<NavBar />
		</MemoryRouter>
	);

	// Check if the Links are in the document
	expect(getByText("Home")).toBeInTheDocument();
	expect(getByText("About")).toBeInTheDocument();
	expect(getByText("Contact")).toBeInTheDocument();
	expect(getByText("Login")).toBeInTheDocument();
	expect(getByText("Book Now")).toBeInTheDocument();

	// Check if the Links have the correct href attribute
	const bookNowLink = getByText("Book Now");
	expect(bookNowLink).toHaveAttribute("href", "/book");

	const homeLink = getByText("Home");
	expect(homeLink).toHaveAttribute("href", "/");

	const aboutLink = getByText("About");
	expect(aboutLink).toHaveAttribute("href", "/about");

	const contactLink = getByText("Contact");
	expect(contactLink).toHaveAttribute("href", "/contact");

	const loginLink = getByText("Login");
	expect(loginLink).toHaveAttribute("href", "/login");

	// Unmount the component after the test
	unmount();
});
