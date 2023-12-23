import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/login.css";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	const handleSignIn = async () => {
		try {
			// Need to change this to your backend endpoint
			const response = await axios.post(
				"https://pawtel-48da552cecec.herokuapp.com/users/login",
				{
					email: email,
					password: password,
				}
			);

			// Get the JWT token from the response
			const jwtToken = response.data.jwt;

			console.log("JWT Token:", jwtToken);

			// Clear the input fields
			setEmail("");
			setPassword("");
		} catch (error) {
			// Handle login error
			setError("Invalid email or password");
		}
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
