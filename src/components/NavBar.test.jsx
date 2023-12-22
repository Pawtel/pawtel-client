import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";
import { expect, test } from "vitest";

test("NavBar renders correctly", async () => {
	const { getByText, unmount } = render(
		<MemoryRouter>
			<NavBar />
		</MemoryRouter>
	);

	expect(getByText("Home")).toBeInTheDocument();
	expect(getByText("About")).toBeInTheDocument();
	expect(getByText("Contact")).toBeInTheDocument();
	expect(getByText("Login")).toBeInTheDocument();
	expect(getByText("Book Now")).toBeInTheDocument();

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

	unmount();
});
