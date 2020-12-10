import React from "react";
import { Button, Icon } from "react-materialize";

const ButtonFloating = () => {
	return (
		<Button
			className='blue'
			floating
			node='button'
			icon={<Icon>add</Icon>}
			large
			waves='light'></Button>
	);
};

export default ButtonFloating;
