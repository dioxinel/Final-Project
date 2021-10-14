import React, { useContext } from 'react';
import { AuthModalContext } from '../../../../App';
import s from './AuthHeader.module.scss';

export function LoginBtn() {
	const { setIsOpen, setModalCondition } = useContext(AuthModalContext);

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
