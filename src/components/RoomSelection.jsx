import { useState } from "react";
import "../styles/booking.css";
import standardRoomImage from "../assets/images/standard-room.avif";
import deluxeRoomImage from "../assets/images/deluxe-room.avif";

const RoomSelection = ({ petDetails, onNext, onBack, calculateRoomCost }) => {
	const [selectedRoom, setSelectedRoom] = useState(null);

	const handleRoomSelect = (roomType) => {
		setSelectedRoom(roomType);
	};

	const handleSubmit = () => {
		// Validation logic can be added here

		// Call the onNext function to proceed to the next step
		onNext(selectedRoom);
	};

	return (
		<>
			<h1>Select a room</h1>
			<div className="room-selection-container">
				<div>
					<img
						className={`room-image ${
							selectedRoom === "standard" ? "selected" : ""
						}`}
						src={standardRoomImage}
						alt="Standard Pet Room"
						onClick={() => handleRoomSelect("standard")}
					/>
					<div className="room-description-container">
						<h3>Standard Pet Room</h3>
						<p>
							Comfortable and cozy accommodation for your furry
							friend. Features a soft bed, play area, and basic
							amenities.
						</p>
						<p>Cost per day: ${calculateRoomCost("standard")}</p>
					</div>
				</div>
				<div>
					<img
						className={`room-image ${
							selectedRoom === "deluxe" ? "selected" : ""
						}`}
						src={deluxeRoomImage}
						alt="Deluxe Pet Room"
						onClick={() => handleRoomSelect("deluxe")}
					/>
					<div className="room-description-container">
						<h3>Deluxe Pet Room</h3>
						<p>
							Spacious and luxurious accommodation for your pet.
							Includes a deluxe bed, private play area, and
							premium amenities.
						</p>
						<p>Cost per day: ${calculateRoomCost("deluxe")}</p>
					</div>
				</div>
			</div>
			<div className="room-buttons">
				<button className="submit-button" onClick={onBack}>
					Back
				</button>
				<button className="submit-button" onClick={handleSubmit}>
					Next
				</button>
			</div>
		</>
	);
};

export default RoomSelection;
