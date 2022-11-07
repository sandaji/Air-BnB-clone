/** @format */
import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
 import { useHistory } from "react-router-dom";
import Search from "./Search";

function Banner() {
	 const history = useHistory();

	const [showSearch, setShowSearch] = useState(false);

	return (
		<div className="banner">
			<div className="banner__search">
				{showSearch && <Search />}
				<Button
					onclick={() => setShowSearch(!showSearch)}
					className="banner__searchButton"
					variant="outlined"
				>
					{showSearch ? "hide" : "search dates"}
				</Button>
			</div>
			<div className="banner__info">
				<h1>Stay indoors and get everything delivered to you</h1>

				<h5>
					plan a different kind of gateway to uncover the hidden gems around you
				</h5>
				<Button onclick={()=>history.push('/search')}  variant="outlined">explore our varieties</Button>
			</div>
		</div>
	);
}

export default Banner;
