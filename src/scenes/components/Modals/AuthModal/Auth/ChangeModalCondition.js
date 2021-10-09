import React from 'react';
import s from './Auth.module.scss';

export function ChangeModalCondition({ text, condition, setModalCondition }) {
	const handleClick = () => {
		if (condition) {
			setModalCondition(false);
		} else {
			setModalCondition(true);
		}
	};

	return (
		<div className={s.changeModalCondition}>
			{text}
			<div onClick={handleClick}>{condition ? ' Register now' : ' Log In'}</div>
		</div>
	);
}
