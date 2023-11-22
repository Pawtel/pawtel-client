import { Link } from "react-router-dom";

function App() {
	return (
		<>
			<h1>Pawtel</h1>
			<div className="topnav">
				<li>
					<Link to="about">About Page</Link>
					<Link to="contact">Contact Page</Link>
					<Link to="login">Login Page</Link>
					<Link to="rooms">Rooms Page</Link>
				</li>
			</div>
		</>
	);
}

export default App;
