import React, { useContext } from 'react';

import s from '../AuthHeader.module.scss';
import { AuthModalContext } from '../../../../../../App';

export function LoginBtn() {
	const { setIsOpen, setModalCondition } = useContext(AuthModalContext);

	const handleClick = () => {
		setIsOpen(true);
		setModalCondition(true);
	};

	return (
		<button onClick={handleClick} className={s.loginBtn}>
			login
		</button>
	);
}
