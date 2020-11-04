import React, { useContext, useState } from "react";
import PropTypes, { element } from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [showDropdown, setShowDropdown] = useState(false);
	const [clickedDropDown, setClickedDropDown] = useState(false);
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light d-flex ">
			<a className="navbar-brand" href="#">
				Navbar
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
				<ul className="navbar-nav mr-0">
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
							Search
						</button>
					</form>
					<button className="nav-item ">
						<i className="fas fa-user" />
					</button>
					<button className="nav-item ">
						<i className="fas fa-shopping-cart" />
					</button>

					{/* Boton Favorito 1 */}
					<a className={"nav-item dropdown " + (showDropdown ? "show" : "")}>
						<button
							className="faves btn btn-outline-danger nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded={clickedDropDown}
							onClick={() => setClickedDropDown(!clickedDropDown)}>
							<i className="fas fa-heart" />{" "}
							<span className="badge badge-danger">{store.favorites.length}</span>
						</button>
						<div
							className={store.favorites.length > 0 ? "dropdown-menu " + "show" : "d-none"}
							aria-labelledby="navbarDropdown">
							{store.favorites.length > 0
								? store.favorites.map((elm, index) => (
										<li
											key={index}
											className="dropdown-item d-flex align-items-center justify-content-between text-danger">
											<Link to={`/details/${index + 1}`}>{elm.name}</Link>
											&nbsp;&nbsp;
											<i
												className="fas fa-backspace"
												onClick={() => actions.deleteFromFavorites(elm)}
											/>
										</li>
								  ))
								: null}
						</div>
					</a>
				</ul>
			</div>
		</nav>
	);
};
