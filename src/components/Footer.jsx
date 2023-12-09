import "../styles/footer.css";
import logoImage from "../assets/images/Pawtel-logo.png";

const Footer = () => {
	return (
		<div className="footer-container">
			<img className="logo-image" src={logoImage} alt="Pawtel Logo"></img>
		</div>
	);
};

export default Footer;
