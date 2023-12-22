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

	const handleSignUp = () => {
		// Implement backend sign-up logic here
		console.log("Sign Up:", {
			firstName,
			lastName,
			address,
			email,
			username,
			password,
		});
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
