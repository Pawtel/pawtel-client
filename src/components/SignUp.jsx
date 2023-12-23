import { useState } from "react";
import "../styles/signup.css";
import { Link } from "react-router-dom";

const SignUp = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [address, setAddress] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSignUp = async () => {
		try {
			// Define the endpoint URL for user registration
			// Change this later with actual backend endpoint
			const signUpEndpoint = "https://backend-api.com/signup";

			// Prepare the user data to send to the server
			const userData = {
				firstName,
				lastName,
				address,
				email,
				username,
				password,
			};

			// Send a POST request to the server
			const response = await fetch(signUpEndpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userData),
			});

			// Check if the request was successful (status code 200)
			if (response.ok) {
				console.log("User successfully created!");
			} else {
				// Handle errors (e.g., display an error message)
				console.error("Failed to create user:", response.statusText);
			}
		} catch (error) {
			console.error("An error occurred during sign-up:", error);
		}
	};

	return (
		<div className="signup-container">
			<div className="signup-form">
				<label htmlFor="firstName">First Name:</label>
				<input
					id="firstName"
					type="text"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
					required
				/>
				<label htmlFor="lastName">Last Name:</label>
				<input
					id="lastName"
					type="text"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
					required
				/>
				<label htmlFor="address">Address:</label>
				<input
					id="address"
					type="text"
					value={address}
					onChange={(e) => setAddress(e.target.value)}
					required
				/>
				<label htmlFor="email">Email:</label>
				<input
					id="email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<label htmlFor="username">Username:</label>
				<input
					id="username"
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
				<label htmlFor="password">Password:</label>
				<input
					id="password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<button onClick={handleSignUp}>Create User</button>
				<Link to="/login" className="login-link" replace>
					Go back to sign in
				</Link>
			</div>
		</div>
	);
};

export default SignUp;
