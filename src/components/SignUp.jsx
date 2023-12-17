import { useState } from "react";
import "../styles/signup.css";
import { Link } from "react-router-dom";

const SignUp = () => {
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSignUp = () => {
		// Implement backend sign-up logic here
		console.log("Sign Up:", {
			name,
			address,
			phoneNumber,
			email,
			username,
			password,
		});
	};

	return (
		<div className="signup-container">
			<div className="signup-form">
				<label>Name:</label>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
				<label>Address:</label>
				<input
					type="text"
					value={address}
					onChange={(e) => setAddress(e.target.value)}
					required
				/>
				<label>Phone Number:</label>
				<input
					type="text"
					value={phoneNumber}
					onChange={(e) => setPhoneNumber(e.target.value)}
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
