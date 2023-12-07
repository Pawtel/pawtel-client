import { Link } from "react-router-dom";
import "../styles/topnav.css";

const NavBar = () => {
	return (
		<>
			<div className="top-nav">
				<li className="nav-list">
					<Link className="book-link-style" to="/book" replace>
						Book Now
					</Link>
					<Link to="/" replace>
						Home
					</Link>
					<Link to="/about" replace>
						About
					</Link>
					<Link to="/contact" replace>
						Contact
					</Link>
					<Link to="/login" replace>
						Login
					</Link>
				</li>
			</div>
		</>
	);
};

export default NavBar;
