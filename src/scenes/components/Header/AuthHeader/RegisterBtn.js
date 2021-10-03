import React from 'react';
import { useHistory } from 'react-router';
import s from './AuthHeader.module.scss';

export function RegisterBtn() {
	const history = useHistory();

	const handleClick = () => {
		history.push('/auth/register');
	};

	return (
		<div className={s.registerBtn} onClick={handleClick}>
			register
		</div>
	);
}
