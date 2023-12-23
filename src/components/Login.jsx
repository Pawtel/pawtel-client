import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/login.css";
import { jwtDecode } from "jwt-decode";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const [message, setMessage] = useState("");

	const handleSignIn = async () => {
		try {
			const response = await axios.post(
				"https://pawtel-48da552cecec.herokuapp.com/users/login",
				{
					email: email,
					password: password,
				}
			);

			const jwtToken = response.data.jwt;
			console.log("JWT Token:", jwtToken);

			// Store the JWT token in the local storage
			localStorage.setItem("jwt", jwtToken);

			setEmail("");
			setPassword("");
			setMessage("Successful login");
			console.log("Successful login");
		} catch (error) {
			setError("Invalid email or password");
			setMessage("");
		}

		// Use the JWT token from the local storage
		const jwtToken = localStorage.getItem("jwt");

		// Decode the JWT token to get the user ID
		const decodedToken = jwtDecode(jwtToken);
		const userId = decodedToken.userId;

		axios.get("https://pawtel-48da552cecec.herokuapp.com/users/" + userId, {
			headers: {
				Authorization: `Bearer ${jwtToken}`,
			},
		});
	};

	return (
		<div className="login-container">
			<h2>Sign In / Sign Up</h2>
			<div className="login-form">
				<label htmlFor="email">Email:</label>
				<input
					id="email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
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

				{error && <div className="error-message">{error}</div>}

				{message && <div className="success-message">{message}</div>}

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

export default Login;
