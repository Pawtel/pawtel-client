import "../styles/login.css";
import { useState } from "react";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignIn = () => {
		// Implement backend sign-in logic here
		console.log("Sign In:", { email, password });
	};

	const handleSignUp = () => {
		// Implement backend sign-up logic here
		console.log("Sign Up:", { email, password });
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
					<button onClick={handleSignUp}>Sign Up</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
