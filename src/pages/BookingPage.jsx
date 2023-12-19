import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PetDetailsForm from "../components/PetDetailsForm";
import RoomSelection from "../components/RoomSelection";
import DateSelection from "../components/DateSelection";
import ReviewBooking from "../components/ReviewBooking";

const BookingPage = () => {
	const [step, setStep] = useState(1);
	const [petDetails, setPetDetails] = useState({});
	const [selectedRoom, setSelectedRoom] = useState(null);
	const [dateDetails, setDateDetails] = useState({
		startDate: null,
		endDate: null,
	});
	const [totalCost, setTotalCost] = useState(0);

	const calculateRoomCost = (roomType) => {
		// Add your logic to calculate the cost of the room
		const roomCosts = {
			standard: 100,
			deluxe: 150,
		};
		return roomCosts[roomType] || 0;
	};

	const handleNext = (data) => {
		if (step === 1) {
			setPetDetails(data);
		} else if (step === 2) {
			setSelectedRoom(data);
		} else if (step === 3) {
			const startDate = data[0].startDate;
			const endDate = data[0].endDate;

			// Calculate total cost based on room type and date range
			const roomCost = calculateRoomCost(selectedRoom);
			const dateRangeCost = calculateDateRangeCost(startDate, endDate);

			setDateDetails({ startDate, endDate });
			setTotalCost(roomCost + dateRangeCost);
		}

		setStep((prevStep) => prevStep + 1);
	};

	const calculateDateRangeCost = (startDate, endDate) => {
		// Add your logic to calculate the cost of the date range
		// (e.g., based on the number of days, a daily rate, etc.)
		const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
		const days = Math.round(Math.abs((startDate - endDate) / oneDay));

		// Example: Assume a daily rate of $50
		const dailyRate = 50;
		return days * dailyRate;
	};

	const handleBack = () => {
		setStep((prevStep) => Math.max(1, prevStep - 1));
	};

	const renderStep = () => {
		switch (step) {
			case 1:
				return <PetDetailsForm onNext={handleNext} />;
			case 2:
				return (
					<RoomSelection
						petDetails={petDetails}
						onNext={handleNext}
						onBack={handleBack}
						calculateRoomCost={calculateRoomCost}
					/>
				);
			case 3:
				return (
					<DateSelection
						selectedRoom={selectedRoom}
						onNext={handleNext}
						onBack={handleBack}
					/>
				);
			case 4:
				return (
					<ReviewBooking
						petDetails={petDetails}
						selectedRoom={selectedRoom}
						dateDetails={dateDetails}
						totalCost={totalCost}
						onBack={handleBack}
					/>
				);
			default:
				return null;
		}
	};

	return (
		<>
			<header>
				<NavBar />
			</header>

			<main>
				<h1 className="title">Make a Booking</h1>
				{renderStep()}
			</main>

			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default BookingPage;
