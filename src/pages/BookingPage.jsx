import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PetDetailsForm from "../components/PetDetailsForm";
import RoomSelection from "../components/RoomSelection";
import DateSelection from "../components/DateSelection";
import ReviewBooking from "../components/ReviewBooking";
import "../styles/booking.css";

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
		const roomCosts = {
			standard: 100,
			deluxe: 150,
		};
		return roomCosts[roomType] || 0;
	};

	const calculateTotalCost = (startDate, endDate, roomType) => {
		// Calculate total cost based on room type
		const roomCost = calculateRoomCost(roomType);

		const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
		const days = Math.round(Math.abs((startDate - endDate) / oneDay));

		const dateRangeCost = days * roomCost;

		return dateRangeCost;
	};

	const handleNext = (data) => {
		if (step === 1) {
			setPetDetails(data);
		} else if (step === 2) {
			setSelectedRoom(data);
		} else if (step === 3) {
			const startDate = data.startDate;
			const endDate = data.endDate;

			// Calculate total cost based on room type and date range
			const totalCost = calculateTotalCost(
				startDate,
				endDate,
				selectedRoom
			);

			setDateDetails({ startDate, endDate });
			setTotalCost(totalCost);
		}

		setStep((prevStep) => prevStep + 1);
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
						onNext={(dateRange) => handleNext(dateRange)}
						onBack={handleBack}
						calculateTotalCost={calculateTotalCost}
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
