import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import RoomsPage from "./pages/RoomsPage";
import ErrorPage from "./pages/ErrorPage";

const Router = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <App />,
			errorElement: <ErrorPage />,
		},
		{
			path: "/about",
			element: <AboutPage />,
			errorElement: <ErrorPage />,
		},
		{
			path: "/contact",
			element: <ContactPage />,
			errorElement: <ErrorPage />,
		},
		{
			path: "/login",
			element: <LoginPage />,
			errorElement: <ErrorPage />,
		},
		{
			path: "/rooms",
			element: <RoomsPage />,
			errorElement: <ErrorPage />,
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
