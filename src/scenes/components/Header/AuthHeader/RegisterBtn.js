import React from 'react';
import s from './AuthHeader.module.scss';

export function RegisterBtn({ setIsOpen, setModalCondition }) {
	const handleClick = () => {
		setIsOpen(true);
		setModalCondition(false);
	};

	return (
		<div className={s.registerBtn} onClick={handleClick}>
			register
		</div>
	);
}
