import React from "react";
import { Navbar, NavItem } from "react-materialize";

const Header = () => {
	return (
		<Navbar alignLinks='left'>
			<NavItem>Home</NavItem>
			<NavItem>Expenses</NavItem>
			<NavItem>Budgets</NavItem>
		</Navbar>
	);
};

export default Header;
