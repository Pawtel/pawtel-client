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

	const handleNext = (data) => {
		// Logic to update state and proceed to the next step
		if (step === 1) {
			setPetDetails(data);
		} else if (step === 2) {
			setSelectedRoom(data);
		}
		setStep((prevStep) => prevStep + 1);
	};

	const handleBack = () => {
		// Logic to go back to the previous step
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
