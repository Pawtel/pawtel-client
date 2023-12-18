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
						<h1 className="title">Pawtel 1</h1>
						<img
							className="home-image"
							src={homeImage}
							alt="Image of Dog and Cat in field"
						></img>
					</div>
				</section>
				<h3 className="testimonial-title">Testimonials</h3>
				<div className="title-rows">
					<h3>Review One</h3>
					<h3>Review Two</h3>
					<h3>Review Three</h3>
				</div>
				<section className="main-container">
					<div>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Maxime laboriosam repellendus, itaque, iusto
							atque aliquam doloribus laborum amet quis delectus
							unde possimus veniam perferendis dolor quam odio
							tenetur voluptatibus dolore! Lorem ipsum dolor sit
							amet consectetur adipisicing elit. Ducimus saepe aut
							maiores tempore explicabo pariatur inventore itaque,
							illum doloremque voluptatem aliquam in ipsam cum
							earum natus ullam quisquam quia magni.
						</p>
					</div>
					<div>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Voluptas tempore ipsum at minima dicta
							deleniti alias veritatis cum laudantium repellat.
							Ad, aliquid ducimus. Quaerat delectus vitae illum
							consequuntur totam distinctio. Lorem ipsum dolor sit
							amet consectetur, adipisicing elit. Expedita
							voluptates voluptate at dolorem error? Cum quis quos
							praesentium iusto voluptatibus, repellat, numquam ab
							nesciunt, ratione fugit voluptate ea. Quaerat, ut?
						</p>
					</div>
					<div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Adipisci nemo enim voluptates rem iste
							possimus dignissimos, voluptatibus eveniet natus
							expedita, consectetur illum delectus. Rerum
							similique reprehenderit facere voluptate magni nam.
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Quo veniam maxime, quibusdam error itaque
							magnam sit obcaecati animi enim necessitatibus atque
							odio nesciunt corporis modi placeat tempore nobis
							iste voluptatem.
						</p>
					</div>
				</section>
			</main>

			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default HomePage;
