import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div>
			<h1>Uh Oh, this route does not Exist!</h1>
			<Link to="/">
				You can go back to the home page by clicking here.
			</Link>
		</div>
	);
};

export default ErrorPage;
