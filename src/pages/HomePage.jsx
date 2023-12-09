import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/home.css";
import homeImage from "../assets/images/pawtel-home-main.avif";

const HomePage = () => {
	return (
		<>
			<header>
				<NavBar />
			</header>

			<main>
				<section>
					<div className="home-container">
						<h1 className="home-title">Pawtel</h1>
						<img
							className="home-image"
							src={homeImage}
							alt="Image of Dog and Cat in field"
						></img>
					</div>
				</section>
				<section></section>
			</main>

			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default HomePage;
