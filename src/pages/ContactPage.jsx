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
					Send us a message and one of our friendly staff will get
					back to you.
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
