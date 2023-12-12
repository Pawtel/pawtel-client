import "../styles/footer.css";
import logoImage from "../assets/images/Pawtel-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="social-icons">
				<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
					<FontAwesomeIcon
						className="footer-icons"
						icon={faFacebook}
					/>
				</a>
				<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
					<FontAwesomeIcon
						className="footer-icons"
						icon={faInstagram}
					/>
				</a>
				<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
					<FontAwesomeIcon className="footer-icons" icon={faPhone} />
				</a>
			</div>
			<img className="logo-image" src={logoImage} alt="Pawtel Logo"></img>
		</div>
	);
};

export default Footer;
