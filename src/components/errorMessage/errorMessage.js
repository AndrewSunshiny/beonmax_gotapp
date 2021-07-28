import React from "react";
import "./errorMessage.css";

const ErrorMessage = () => {
	return (
		<>
			<img src={process.env.PUBLICK_URL + "/img/error.jpg"} alt="error" />
			<span>Something goes wrong</span>
		</>
	);
};
export default ErrorMessage;
