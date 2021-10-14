import React, { useContext } from 'react';

import { AuthModalContext } from '../../../../App';

import s from './AuthHeader.module.scss';

export function RegisterBtn() {
	const { setIsOpen, setModalCondition } = useContext(AuthModalContext);
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
