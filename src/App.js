import React from "react";
import Header from "./components/nav/Header";
import styles from "./App.module.css";
import "semantic-ui-css/semantic.min.css";

function App() {
	return (
		<div className={styles.app}>
			<Header />
		</div>
	);
}

export default App;
