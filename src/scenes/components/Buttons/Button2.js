import React from 'react';

import s from './Buttons.module.scss';

export function Button2({ text, handleClick, className }) {
	return (
		<button
			className={`${s.button2} ${className}`}
			onClick={(evt) => {
				handleClick(evt);
			}}
		>
			{text}
		</button>
	);
}
