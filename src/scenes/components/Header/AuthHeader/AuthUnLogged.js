import React from 'react';
import s from './AuthHeader.module.scss';
import { Line } from './Line';
import { LoginBtn } from './LoginBtn';
import { RegisterBtn } from './RegisterBtn';

export function AuthUnLogged() {
	return (
		<div className={s.authUnLogged}>
			<RegisterBtn />
			<Line />
			<LoginBtn />
		</div>
	);
}
