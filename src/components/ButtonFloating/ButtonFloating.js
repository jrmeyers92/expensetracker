import React from "react";
import { Button, Icon } from "react-materialize";
import M from "react-materialize";
import styles from "./ButtonFloating.module.css";

const ButtonFloating = () => {
	document.addEventListener("DOMContentLoaded", function () {
		var elems = document.querySelectorAll(".fixed-action-btn");
		// var instances = M.FloatingActionButton.init(elems, options);
	});
	return (
		<Button
			className={`${styles.floatingButton} red`}
			floating
			node='button'
			icon={<Icon>add</Icon>}
			large
			waves='light'>
			<ul>
				<li>
					<a class='btn-floating red'>
						<i class='material-icons'>insert_chart</i>
					</a>
				</li>
				<li>
					<a class='btn-floating yellow darken-1'>
						<i class='material-icons'>format_quote</i>
					</a>
				</li>
				<li>
					<a class='btn-floating green'>
						<i class='material-icons'>publish</i>
					</a>
				</li>
				<li>
					<a class='btn-floating blue'>
						<i class='material-icons'>attach_file</i>
					</a>
				</li>
			</ul>
		</Button>
	);
};

export default ButtonFloating;
