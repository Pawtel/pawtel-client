import "../styles/login.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignIn = () => {
		// Implement backend sign-in logic here
		console.log("Sign In:", { email, password });
	};

	return (
		<div className="login-container">
			<h2>Sign In / Sign Up</h2>
			<div className="login-form">
				<label>Email:</label>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>

				<label>Password:</label>
				<input
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
