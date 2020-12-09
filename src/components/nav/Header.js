import React from "react";
import styles from "./Header.module.css";
import AccountCard from "./AccountCard/AccountCard";

const Header = () => {
	return (
		<header>
			<nav>
				<ul className={styles.nav__list}>
					<li className={styles.nav__item}>Budget</li>
					<li className={styles.nav__item}>Expenses</li>
				</ul>
			</nav>
			<AccountCard />
		</header>
	);
};

export default Header;
