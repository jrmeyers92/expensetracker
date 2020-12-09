import React from "react";
import { Header, Image } from "semantic-ui-react";
import styles from "./AccountCard.module.css";


const AccountCard = () => {
	const faker = require("faker");
	const firstName = faker.name.firstName();
	const avatar = faker.image.people();
	return (
		<Header as='h2' className={styles.accountCard}>
			<i className={ `far fa-user ${styles.accountCard__icon}` }></i>
			<span className={styles.accountCard__name}>{firstName}</span>
		</Header>
	);
};

export default AccountCard;
