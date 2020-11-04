import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Product } from "../component/product";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export class ContinentView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentCountry: ""
		};
	}

	render() {
		var countries = [];
		var products = this.props.location.state.products.filter((product, index) => {
			return product.continent == this.props.location.state.continent;
		});
		console.log("PRODUCTS: ", products);
		for (var x of products) {
			countries.push(x.country);
		}
		console.log("COUNTRIES: ", countries);
		console.log("Current Country length: ", this.state.currentCountry.length);

		return (
			<div className="text-center mt-5">
				<h1>{this.props.location.state.continent}</h1>

				<h3>
					{countries.map((country, ind) => (
						<button key={ind} onClick={() => this.setState({ currentCountry: country })}>
							{country}
						</button>
					))}
				</h3>
				{this.state.currentCountry.length > 3
					? this.props.location.state.products.map((product, index) => {
							if (product.country == this.state.currentCountry) {
								return <Product key={index} product={product} />;
							}
					  })
					: this.props.location.state.products.map((product, index) => {
							if (product.continent == this.props.location.state.continent) {
								return <Product key={index} product={product} />;
							}
					  })}
			</div>
		);
	}
}
ContinentView.propTypes = {
	location: PropTypes.object
};
