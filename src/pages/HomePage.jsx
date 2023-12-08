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
				<div className="home-container">
					<h1>Home Page</h1>
				</div>
			</main>

			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default HomePage;
