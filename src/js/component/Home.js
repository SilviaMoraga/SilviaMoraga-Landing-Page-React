import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Jumbotron from "./Jumbotron"
import Footer from "./Footer";

const Home = () => {
	const data = [
		{
			title: "Card Title 1",
			description: "Bacon ipsum dolor amet capicola chicken cupim prosciutto short ribs fatback spare ribs. Pancetta ball tip sausage landjaeger swine meatball burgdoggen prosciutto pork corned beef.",
			imgUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		{
			title: "Card Title 2",
			description: "Bacon ipsum dolor amet capicola chicken cupim prosciutto short ribs fatback spare ribs. Pancetta ball tip sausage landjaeger swine meatball burgdoggen prosciutto pork corned beef.",
			imgUrl: "https://images.unsplash.com/photo-1713810847412-e4e9ef2f9800?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		{
			title: "Card Title 3",
			description: "Bacon ipsum dolor amet capicola chicken cupim prosciutto short ribs fatback spare ribs. Pancetta ball tip sausage landjaeger swine meatball burgdoggen prosciutto pork corned beef.",
			imgUrl: "https://miro.medium.com/v2/resize:fit:960/1*bqdvsVQb-qJQRSbzOx0oGQ.png"
		},
		{
			title: "Card Title 4",
			description: "Bacon ipsum dolor amet capicola chicken cupim prosciutto short ribs fatback spare ribs. Pancetta ball tip sausage landjaeger swine meatball burgdoggen prosciutto pork corned beef.",
			imgUrl: "https://images.unsplash.com/photo-1501862348429-dc69b017f297?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		}
	]

	return (
		<div className="text-center">
			<Navbar />

			<div className="container ">
				<Jumbotron />
				<div className="row d-flex justify-content-around">
					{data.map((value, index, array) => {
						return <Card key={index} title={value.title} description={value.description} imgUrl={value.imgUrl} />
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
