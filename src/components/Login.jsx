import "../styles/login.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignIn = () => {
		// Implement backend sign-in logic here
		console.log("Sign In:", { email, password });

		// Clear the input fields
		setEmail("");
		setPassword("");
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
