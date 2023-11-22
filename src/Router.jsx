import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
// import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RoomsPage from "./pages/RoomsPage";

const Router = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <App />,
		},
		{
			path: "/about",
			element: <AboutPage />,
		},
		{
			path: "/contact",
			element: <ContactPage />,
		},
		{
			path: "/login",
			element: <LoginPage />,
		},
		{
			path: "/rooms",
			element: <RoomsPage />,
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
