import React from 'react';

import { UserInfo } from './UserInfo';
import { Menu } from './Menu';

import s from '../Account.module.scss';

export function AccountMenu() {
	return (
		<div className={s.accountMenu}>
			<UserInfo />
			<Menu />
		</div>
	);
}
