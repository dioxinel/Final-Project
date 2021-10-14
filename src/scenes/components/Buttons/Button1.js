import React from 'react';

import s from './Buttons.module.scss';

export function Button1({ text, handleClick, className }) {
	return (
		<button
			className={`${s.button1} ${className}`}
			onClick={(evt) => {
				handleClick(evt);
			}}
		>
			{text}
		</button>
	);
}
