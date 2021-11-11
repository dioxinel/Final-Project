import React, { useContext } from 'react';

import { AuthModalContext } from '../../../../../App';

import s from './Auth.module.scss';

export function ChangeModalCondition({ text }) {
	const { modalCondition, setModalCondition } = useContext(AuthModalContext);
	const handleClick = () => {
		if (modalCondition) {
			setModalCondition(false);
		} else {
			setModalCondition(true);
		}
	};

	return (
		<div className={s.changeModalCondition}>
			<p>{text}</p>
			<button onClick={handleClick}>
				{modalCondition ? ' Register now' : ' Log In'}
			</button>
		</div>
	);
}
