import { useState } from "react";
import "../styles/booking.css";

const RoomSelection = ({ petDetails, onNext, onBack }) => {
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
		<div className="room-selection-container">
			<h2>Select a Room for Your Pet</h2>
			<div>
				<img
					className="room-image"
					src="src/assets/images/standard-room.avif"
					alt="Standard Pet Room"
					onClick={() => handleRoomSelect("standard")}
				/>
				<h3>Standard Pet Room</h3>
				<p>
					Comfortable and cozy accommodation for your furry friend.
					Features a soft bed, play area, and basic amenities.
				</p>
				<p>Cost per day: $100</p>
			</div>
			<div>
				<img
					className="room-image"
					src="src/assets/images/deluxe-room.avif"
					alt="Deluxe Pet Room"
					onClick={() => handleRoomSelect("deluxe")}
				/>
				<h3>Deluxe Pet Room</h3>
				<p>
					Spacious and luxurious accommodation for your pet. Includes
					a deluxe bed, private play area, and premium amenities.
				</p>
				<p>Cost per day: $150</p>
			</div>
			<div>
				<button onClick={handleSubmit}>Next</button>
				<button onClick={onBack}>Back</button>
			</div>
		</div>
	);
};

export default RoomSelection;
