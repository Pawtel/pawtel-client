import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import "../styles/contact.css";

const ContactPage = () => {
	return (
		<>
			<header>
				<NavBar />
			</header>

			<main>
				<h1 className="title">Contact Us</h1>
				<p className="contact-info-message">
					Please feel free to contact us.
				</p>
				<ContactForm />
			</main>

			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default ContactPage;
