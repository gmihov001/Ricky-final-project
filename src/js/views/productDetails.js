import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export class ProductDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			results: null
		};
	}
	componentDidMount = () => {
		const { product } = this.props.location.state;
		this.setState({ results: product });
	};
	render() {
		console.log("Results: ", this.state.results);
		return (
			<div className="container">
				<div className="row">
					<div className="col-6">
						<img
							src="https://www.imperialsugar.com/sites/default/files/styles/recipe_image_node_full/public/sugar_recipes/Homemade-Sweet-Coffee-Soap-is.jpg?itok=RUop2SyW"
							className="w-100"
						/>
					</div>
					<div className="col-6">
						<div className="text-center m-3">
							<h2 className="text-danger">{this.props.location.state.product.name}</h2>
							<p className="text-danger">
								Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
								graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
								century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum
								for use in a type specimen book.
							</p>
						</div>
					</div>
				</div>
				<div className="row ml-1 mr-1 background border-top border-danger">
					<div className="col-12 d-flex justify-content-between text-danger text-center">
						<div className="appearances p-2 m-3">
							<h6>Name</h6>
							<p>{this.props.location.state.product.name}</p>
						</div>
						<div className="affiliations m-3 p-2">
							<h6>Price</h6>
							<p className="text-center">{this.props.location.state.product.price}</p>
						</div>
						<div className="locations p-2 m-3">
							<h6>Continent</h6>
							<p>{this.props.location.state.product.continent}</p>
						</div>
						<div className="gender p-2 m-3">
							<h6>Country</h6>
							<p>{this.props.location.state.product.country}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
ProductDetails.propTypes = {
	location: PropTypes.object
};
