import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Login from "../components/Login";

const LoginPage = () => {
	return (
		<>
			<header>
				<NavBar />
			</header>

			<main>
				<h1 className="title">Login To Your Account</h1>
				<Login />
			</main>

			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default LoginPage;
