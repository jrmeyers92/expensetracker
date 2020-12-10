import React from "react";
import { Navbar, NavItem } from "react-materialize";
// import { Navbar } from "materialize-css";

const Nav = () => {
	return (
		<div>
			<Navbar alignLinks='right' className='blue'>
				<NavItem>Home</NavItem>
				<NavItem>Budget</NavItem>
				<NavItem>Expenses</NavItem>
			</Navbar>
		</div>
	);
};

export default Nav;
