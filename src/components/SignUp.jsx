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
				<label>First Name:</label>
				<input
					type="text"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
					required
				/>
				<label>Last Name:</label>
				<input
					type="text"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
					required
				/>
				<label>Address:</label>
				<input
					type="text"
					value={address}
					onChange={(e) => setAddress(e.target.value)}
					required
				/>
				<label>Email:</label>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<label>Username:</label>
				<input
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
				<label>Password:</label>
				<input
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
