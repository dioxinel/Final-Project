import React from 'react';

import { UserInfo } from './components/UserInfo';
import { Menu } from './components/Menu';

import s from './AccountMenu.module.scss';

export function AccountMenu() {
	return (
		<div className={s.accountMenu}>
			<UserInfo />
			<Menu />
		</div>
	);
}
