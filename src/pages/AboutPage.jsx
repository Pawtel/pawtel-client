import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBath,
	faBowlFood,
	faHouse,
	faShieldDog,
} from "@fortawesome/free-solid-svg-icons";

const AboutPage = () => {
	return (
		<>
			<header>
				<NavBar />
			</header>

			<main>
				<h1 className="title">About Us</h1>
				<section className="services-container">
					<div className="history-container">
						<h1>Our History:</h1>{" "}
						<p>
							Pawtel was established in 2010 by animal enthusiasts
							and entrepreneurs, Jessica Liong and Luke Wheldale.
							Their vision was to create a haven where pets could
							experience a luxurious and comfortable stay,
							combining top-notch care with a fun and enriching
							environment.
						</p>
						<p>
							Starting with a modest facility offering basic
							boarding services, Pawtel quickly gained popularity
							due to its dedicated staff, personalised care, and
							commitment to the well-being of its furry guests.
							The facility expanded to accommodate the growing
							demand, adding spacious play areas and grooming
							services.{" "}
						</p>{" "}
						<p>
							{" "}
							In 2015, recognizing the need for specialized care,
							Pawtel introduced separate wings for cats and dogs.
							The facility continued to evolve, incorporating
							webcams for pet owners to check in on their beloved
							companions remotely. The introduction of themed
							playdates and birthday celebrations added an extra
							layer of excitement for the pets.{" "}
						</p>{" "}
						<p>
							Pawtel became an integral part of the community by
							partnering with local veterinarians and
							participating in pet adoption events.{" "}
						</p>{" "}
						<p>
							{" "}
							By 2020, Pawtel had become a leading pet hospitality
							destination, renowned for its state-of-the-art
							facilities, professional staff, and commitment to
							creating a stress-free environment for pets.{" "}
						</p>{" "}
						<p>
							Looking ahead, Pawtel envisions expanding its
							services to include rehabilitation programs,
							specialized training, and perhaps even a
							pet-friendly spa. The founders remain dedicated to
							the well-being of pets, aiming to set the standard
							for excellence in pet hospitality.{" "}
						</p>
					</div>
					<div>
						<h1>Services Offered:</h1>

						<div className="service">
							<h2>
								Boarding Accommodations:{" "}
								<FontAwesomeIcon
									className="service-icons"
									icon={faHouse}
								/>
							</h2>
							<ul>
								<li>Standard kennels/cages</li>
								<li>Luxury suites or VIP rooms</li>
								<li>Climate-controlled environments</li>
							</ul>
						</div>

						<div className="service">
							<h2>
								Feeding and Special Diets:{" "}
								<FontAwesomeIcon
									className="service-icons"
									icon={faBowlFood}
								/>
							</h2>
							<ul>
								<li>Regular feeding schedules</li>
								<li>
									Specialised diets as per the owner&apos;s
									instructions
								</li>
								<li>Administration of medications</li>
							</ul>
						</div>
						<div className="service">
							<h2>
								Grooming Services:{" "}
								<FontAwesomeIcon
									className="service-icons"
									icon={faBath}
								/>
							</h2>
							<ul>
								<li>Bathing and brushing</li>
								<li>Nail trimming</li>
								<li>Haircuts and styling</li>
								<li>Ear cleaning</li>
							</ul>
						</div>
						<div className="service">
							<h2>
								Veterinary Care:{" "}
								<FontAwesomeIcon
									className="service-icons"
									icon={faShieldDog}
								/>
							</h2>
							<ul>
								<li>
									On-site veterinary services or partnerships
									with nearby clinics
								</li>
								<li>Regular health check-ups</li>
								<li>Emergency care availability</li>
							</ul>
						</div>
					</div>
				</section>
			</main>

			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default AboutPage;
