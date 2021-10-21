import React from 'react';

import { AuthModal } from '../../../../Modals/AuthModal/AuthModal';
import { Line } from './Line';
import { LoginBtn } from './LoginBtn';
import { RegisterBtn } from './RegisterBtn';

import s from '../AuthHeader.module.scss';

export function AuthUnLogged() {
	return (
		<div className={s.authUnLogged}>
			<RegisterBtn />
			<Line />
			<LoginBtn />
			<AuthModal />
		</div>
	);
}
