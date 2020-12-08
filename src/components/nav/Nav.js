import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
	return (
		<div>
			<ul className={styles.nav__list}>
				<li className={styles.nav__item}>Budget</li>
				<li className={styles.nav__item}>Expenses</li>
			</ul>
		</div>
	);
};

export default Nav;
