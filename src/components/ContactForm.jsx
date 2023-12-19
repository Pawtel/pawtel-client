import "../styles/contact.css";

const ContactForm = () => {
	return (
		<div className="form-container">
			<div className="contact-info">
				<p>
					<strong>Location:</strong> 123 Fake Street, Fake City, FK
				</p>
				<p>
					<strong>Email:</strong> Pawtel@example.com
				</p>
				<p>
					<strong>Phone:</strong> (123) 456-7890
				</p>
				<p>
					<strong>Opening Hours:</strong> Monday-Friday: 9 AM - 5 PM
				</p>
			</div>
		</div>
	);
};

export default ContactForm;
