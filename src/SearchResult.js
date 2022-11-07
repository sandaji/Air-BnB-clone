/** @format */

import React from "react";
import "./SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import image from '../src/image/product-1.jpg'


function SearchResult({
	img,
	location,
	title,
	description,
	star,
	price,
	total,
}) {
	return (
		<div className="searchResult">
			<img src={image} alt="" />
			<FavoriteBorderIcon
   className="searchResult__heart" />

			<div className="searchResult__info"></div>
			<div className="searchResult__infoTop">
        <p>{location}</p>
        <h3>{title}</h3>
        <p>________________</p>
        <p>{description}</p>
			</div>
			<div className="searchResult__infoBottom">
				<div className="searchResult__stars">
        <StarBorderIcon className="searchResult__star" />
        <p>
         <strong>{star}</strong>
        </p>
				</div>
				<div className="searchResults__price">
					<h2>{price}</h2>
					<p>{total}</p>
				</div>
			</div>
		</div>
	);
}

export default SearchResult;
