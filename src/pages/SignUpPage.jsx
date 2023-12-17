import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SignUp from "../components/SignUp";

const LoginPage = () => {
	return (
		<>
			<header>
				<NavBar />
			</header>

			<main>
				<h1 className="title">Sign up</h1>
				<SignUp />
			</main>

			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default LoginPage;
