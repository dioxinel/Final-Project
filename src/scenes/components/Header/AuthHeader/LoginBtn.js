import React from 'react';
import { useHistory } from 'react-router';
import s from './AuthHeader.module.scss';

export function LoginBtn() {
	const history = useHistory();

	const handleClick = () => {
		history.push('/auth/login');
	};

	return (
		<div onClick={handleClick} className={s.loginBtn}>
			login
		</div>
	);
}
