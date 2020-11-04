import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Product } from "../component/product";
import { Context } from "../store/appContext";

export class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			products: [
				{ name: "Coffe", price: "50", continent: "AFRICA", country: "Algeria" },
				{ name: "Coffe", price: "50", continent: "AFRICA", country: "South Africa" },
				{ name: "Boat", price: "50", continent: "AFRICA", country: "Egypt" },
				{ name: "Water", price: "550", continent: "EUROPE", country: "España" },
				{ name: "Juice", price: "70", continent: "ASIA", country: "Japan" },
				{ name: "Pants", price: "80", continent: "AUSTRALIA", country: "Victoria" },
				{ name: "Laptop", price: "20", continent: "NORTH AMERICA", country: "Canada" },
				{ name: "Car", price: "60", continent: "SOUTH AMERICA", country: "Brazil" }
			]
		};
	}

	render() {
		return (
			<div className="text-center mt-5">
				<div>
					<Link
						to={{
							pathname: `/continent`,
							state: {
								products: this.state.products,
								continent: "AFRICA"
							}
						}}>
						<span className="px-3">AFRICA</span>
					</Link>
					<Link
						to={{
							pathname: `/continent`,
							state: {
								products: this.state.products,
								continent: "EUROPE"
							}
						}}>
						<span className="px-3">EUROPE</span>
					</Link>
					<Link
						to={{
							pathname: `/continent`,
							state: {
								products: this.state.products,
								continent: "ASIA"
							}
						}}>
						<span className="px-3">ASIA</span>
					</Link>
					<Link
						to={{
							pathname: `/continent`,
							state: {
								products: this.state.products,
								continent: "AUSTRALIA"
							}
						}}>
						<span className="px-3">AUSTRALIA</span>
					</Link>
					<Link
						to={{
							pathname: `/continent`,
							state: {
								products: this.state.products,
								continent: "NORTH AMERICA"
							}
						}}>
						<span className="px-3">NORTH AMERICA</span>
					</Link>
					<Link
						to={{
							pathname: `/continent`,
							state: {
								products: this.state.products,
								continent: "SOUTH AMERICA"
							}
						}}>
						<span className="px-3">SOUTH AMERICA</span>
					</Link>
				</div>

				{this.state.products.map((product, index) => (
					<Product key={index} product={product} />
				))}
			</div>
		);
	}
}
