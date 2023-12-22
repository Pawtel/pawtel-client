import { render, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import DateSelection from "./DateSelection";
import { DateRangePicker } from "../mocks";

test("DateSelection renders correctly", async () => {
	const onNext = () => {};
	const onBack = () => {};
	const calculateTotalCost = () => {};

	const { getByText, unmount } = render(
		<DateSelection
			onNext={onNext}
			onBack={onBack}
			calculateTotalCost={calculateTotalCost}
			q
			selectedRoom={{}}
		/>
	);

	expect(getByText("Select Stay Dates")).toBeInTheDocument();
	expect(getByText("Back")).toBeInTheDocument();
	expect(getByText("Next")).toBeInTheDocument();

	unmount();
});

test("DateSelection calls onBack and onNext on button click", async () => {
	let onNextCalled = false;
	let onBackCalled = false;
	const onNext = () => {
		onNextCalled = true;
	};
	const onBack = () => {
		onBackCalled = true;
	};
	const calculateTotalCost = () => {};

	const { getAllByText, unmount } = render(
		<DateSelection
			onNext={onNext}
			onBack={onBack}
			calculateTotalCost={calculateTotalCost}
			selectedRoom={{}}
		/>
	);

	const backButtons = getAllByText("Back");
	backButtons.forEach((button) => {
		fireEvent.click(button);
	});
	expect(onBackCalled).toBe(true);

	const nextButtons = getAllByText("Next");
	nextButtons.forEach((button) => {
		fireEvent.click(button);
	});
	expect(onNextCalled).toBe(true);

	unmount();
});
