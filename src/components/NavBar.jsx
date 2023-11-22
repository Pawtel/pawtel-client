import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<>
			<li>
				<Link to="about">About Page</Link>
				<Link to="contact">Contact Page</Link>
				<Link to="login">Login Page</Link>
				<Link to="rooms">Rooms Page</Link>
			</li>
		</>
	);
};

export default NavBar;
