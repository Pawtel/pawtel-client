import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/home.css";

const HomePage = () => {
	return (
		<>
			<header>
				<NavBar />
			</header>

			<main>
				<section>
					<div className="home-container">
						<h1>Home Page</h1>
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
