import { useState } from "react";

const PetDetailsForm = ({ onNext }) => {
	const [petDetails, setPetDetails] = useState({
		animalType: "",
		name: "",
		breed: "",
		color: "",
		gender: "",
		age: 0,
		favouriteToys: [],
		dietaryRequirements: [],
		allergies: [],
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		if (
			name === "favouriteToys" ||
			name === "dietaryRequirements" ||
			name === "allergies"
		) {
			// Handle array fields separately by splitting the input value
			setPetDetails((prevDetails) => ({
				...prevDetails,
				[name]: value.split(",").map((item) => item.trim()), // Split by comma and trim each item
			}));
		} else {
			setPetDetails((prevDetails) => ({
				...prevDetails,
				[name]: value,
			}));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Validation logic can be added here

		// Call the onNext function to proceed to the next step
		onNext(petDetails);
	};

	return (
		<div className="booking-container">
			<h1>Pet details</h1>
			<form className="pet-detail-form" onSubmit={handleSubmit}>
				<label>
					Animal Type:
					<input
						type="text"
						name="animalType"
						value={petDetails.animalType}
						onChange={handleInputChange}
					/>
				</label>

				<label>
					Name:
					<input
						type="text"
						name="name"
						value={petDetails.name}
						onChange={handleInputChange}
					/>
				</label>

				<label>
					Breed:
					<input
						type="text"
						name="breed"
						value={petDetails.breed}
						onChange={handleInputChange}
					/>
				</label>

				<label>
					Color:
					<input
						type="text"
						name="color"
						value={petDetails.color}
						onChange={handleInputChange}
					/>
				</label>

				<label>
					Gender:
					<input
						type="text"
						name="gender"
						value={petDetails.gender}
						onChange={handleInputChange}
					/>
				</label>

				<label>
					Age:
					<input
						type="number"
						name="age"
						value={petDetails.age}
						onChange={handleInputChange}
					/>
				</label>

				<label>
					Favourite Toys (comma-separated):
					<input
						type="text"
						name="favouriteToys"
						value={petDetails.favouriteToys.join(", ")}
						onChange={handleInputChange}
					/>
				</label>

				<label>
					Dietary Requirements (comma-separated):
					<input
						type="text"
						name="dietaryRequirements"
						value={petDetails.dietaryRequirements.join(", ")}
						onChange={handleInputChange}
					/>
				</label>

				<label>
					Allergies (comma-separated):
					<input
						type="text"
						name="allergies"
						value={petDetails.allergies.join(", ")}
						onChange={handleInputChange}
					/>
				</label>

				<button type="submit">Next</button>
			</form>
		</div>
	);
};

export default PetDetailsForm;
