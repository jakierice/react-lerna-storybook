import React from 'react';

const Button = ({ type = 'button', children, onClick }) => (
	<button type={type} className="button" onClick={onClick}>
		{children}
	</button>
);

export default Button;