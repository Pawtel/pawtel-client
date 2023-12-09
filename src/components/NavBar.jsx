import { Link } from "react-router-dom";
import "../styles/topnav.css";
import logoImage from "../assets/images/Pawtel-logo.png";

const NavBar = () => {
	return (
		<>
			<div className="top-nav">
				<img
					className="logo-image"
					src={logoImage}
					alt="Pawtel Logo"
				></img>
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
