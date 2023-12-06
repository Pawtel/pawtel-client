import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<>
			<li>
				<Link to="/about" replace>
					About Page
				</Link>
				<Link to="/contact" replace>
					Contact Page
				</Link>
				<Link to="/login" replace>
					Login Page
				</Link>
				<Link to="/book" replace>
					Booking Page
				</Link>
				<Link to="/" replace>
					Home Page
				</Link>
			</li>
		</>
	);
};

export default NavBar;
