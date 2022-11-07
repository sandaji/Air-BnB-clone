/** @format */

import { Button } from "@material-ui/core";
import React from "react";
import SearchResult from "./SearchResult";
import "./SearchPage.css";

function SearchPage() {
	return (
		<div className="searchPage">
			<div className="searchPage__info">
				<p>100stays </p>
				<h1>Homes nearby</h1>
				<Button variant="outlined">type of place</Button>
				<Button variant="outlined">flexibility</Button>
				<Button variant="outlined">prices</Button>
				<Button variant="outlined">Type Of House</Button>
				<Button variant="outlined">More filters</Button>
			</div>
			<SearchResult
				img="https://encrypted-tbn0.gstatic.com/images?g=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
				location="lavington"
				title="stay at this spacious wooden house"
				description="3 bathrooms . 3 toilets . free parking . free wifi . fire place . "
				star={3.74}
				price="ksh 45356/month"
				total="ksh 76336627 total"
			/>
			<SearchResult
				img="https://encrypted-tbn0.gstatic.com/images?g=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
				location="lavington"
				title="stay at this spacious wooden house"
				description="3 bathrooms . 3 toilets . free parking . free wifi . fire place . "
				star={3.74}
				price="ksh 45356/month"
				total="ksh 76336627 total"
			/>
			<SearchResult
				img="https://encrypted-tbn0.gstatic.com/images?g=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
				location="lavington"
				title="stay at this spacious wooden house"
				description="3 bathrooms . 3 toilets . free parking . free wifi . fire place . "
				star={3.74}
				price="ksh 45356/month"
				total="ksh 76336627 total"
			/>
		</div>
	);
}

export default SearchPage;
 