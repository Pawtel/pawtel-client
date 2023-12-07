// This is the homepage of the application

// import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
	return (
		<>
			<div className="top-nav">
				<NavBar />
			</div>
			<h1>Pawtel</h1>

			<div className="footer">footer is shared among all pages</div>
		</>
	);
}

export default App;
