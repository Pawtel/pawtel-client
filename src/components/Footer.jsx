import "../styles/footer.css";
import logoImage from "../assets/images/Pawtel-logo.png";

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="social-icons">
				<div>1</div>
				<div>2</div>
				<div>3</div>
			</div>
			<img className="logo-image" src={logoImage} alt="Pawtel Logo"></img>
		</div>
	);
};

export default Footer;
