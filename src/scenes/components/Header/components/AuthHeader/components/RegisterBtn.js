import React, { useContext } from 'react';

import s from '../AuthHeader.module.scss';
import { AuthModalContext } from '../../../../../../App';

export function RegisterBtn() {
	const { setIsOpen, setModalCondition } = useContext(AuthModalContext);
	const handleClick = () => {
		setIsOpen(true);
		setModalCondition(false);
	};

	return (
		<button className={s.registerBtn} onClick={handleClick}>
			register
		</button>
	);
}
