import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/login.css";
import { jwtDecode } from "jwt-decode";

// Functional component for the Login page
const Login = () => {
	// State variables to manage email, password, error message, and success message
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const [message, setMessage] = useState("");

	// Function to handle user sign-in
	const handleSignIn = async () => {
		try {
			// Making a POST request to the server for user authentication
			const response = await axios.post(
				"https://pawtel-48da552cecec.herokuapp.com/users/login",
				{
					username: username,
					password: password,
				}
			);

			// Extracting JWT token from the response and storing it in local storage
			const jwtToken = response.data.jwt;
			console.log("JWT Token:", jwtToken);
			localStorage.setItem("jwt", jwtToken);

			// Resetting form fields and displaying success message
			setUsername("");
			setPassword("");
			setMessage("Successful login");
			console.log("Successful login");
		} catch (error) {
			// Handling authentication error and displaying an error message
			setError("Invalid email or password");
			setMessage("");
		}

		// Using the JWT token from local storage for further actions
		const jwtToken = localStorage.getItem("jwt");

		if (jwtToken) {
			// Decoding the JWT token to extract user ID
			const decodedToken = jwtDecode(jwtToken);
			const userId = decodedToken.userId;

			// Making a GET request to fetch user details using the decoded user ID
			axios
				.get(
					"https://pawtel-48da552cecec.herokuapp.com/users/" + userId,
					{
						headers: {
							Authorization: `Bearer ${jwtToken}`,
						},
					}
				)
				.catch((error) => {
					// Handling errors during the GET request, logging to console
					if (error.response && error.response.status === 404) {
						console.log("User not found on the server.");
					} else {
						console.log(
							"An error occurred while making the GET request."
						);
					}
				});
		} else {
			// Logging a message if no JWT token is found in local storage
			console.log("No JWT token found in local storage.");
		}
	};

	// Rendering the login form JSX
	return (
		<div className="login-container">
			<h2>Sign In / Sign Up</h2>
			<div className="login-form">
				{/* Input fields for email and password */}
				<label htmlFor="username">Username:</label>
				<input
					id="username"
					type="username"
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

				{/* Displaying error and success messages if present */}
				{error && <div className="error-message">{error}</div>}
				{message && <div className="success-message">{message}</div>}

				{/* Buttons for signing in and linking to the sign-up page */}
				<div className="buttons-container">
					<button onClick={handleSignIn}>Sign In</button>
					<Link to="/signup" className="signup-link" replace>
						Sign Up
					</Link>
				</div>
			</div>
		</div>
	);
};

// Exporting the Login component
export default Login;
