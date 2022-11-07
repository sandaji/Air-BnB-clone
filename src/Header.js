/** @format */

import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from './logo.png'



function Header() {
	return (
		<div className="header">

			<Link  to='/'>
				<img
					className="header__icon"
					scr= {logo}
					alt=""
				/>
			</Link>
			<div className="header__center">
				<input type="text" />
				<SearchIcon />
			</div>
			<div className="header__right">
				<a href='/'>account</a>
				<a href='/'>products</a>
				<a href='/'>terms</a>
				<ShoppingBasket />
				{/* <LanguageIcon />
				<ExpandMoreIcon /> */}
				<Avatar />
			</div>
		</div>
	)
}

export default Header;
