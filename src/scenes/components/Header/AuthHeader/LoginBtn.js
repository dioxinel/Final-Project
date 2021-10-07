import React from 'react';
import s from './AuthHeader.module.scss';

export function LoginBtn({ setIsOpen, setModalCondition }) {
	const handleClick = () => {
		setIsOpen(true);
		setModalCondition(true);
	};

	return (
		<div onClick={handleClick} className={s.loginBtn}>
			login
		</div>
	);
}
