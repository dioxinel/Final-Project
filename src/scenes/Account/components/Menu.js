import React from 'react';
import { useHistory, useLocation } from 'react-router';

import { AccountBtn } from './AccountButton';

import s from '../Account.module.scss';

export function Menu() {
	const location = useLocation();
	const history = useHistory();

	const handleClickOnMenu = (evt) => {
		if (evt.target.innerHTML === 'Edit Account') {
			history.push('/account/settings');
		} else if (evt.target.innerHTML === 'Orders History') {
			history.push('/account/orders-history');
		} else if (evt.target.innerHTML === 'Favorites') {
			history.push('/account/favorites');
		} else {
			return;
		}
	};

	return (
		<div className={s.menu} onClick={handleClickOnMenu}>
			<AccountBtn
				text={'Edit Account'}
				className={
					location.pathname === '/account/settings'
						? s.accountBtnActivated
						: s.accountBtn
				}
			/>
			<AccountBtn
				text={'Orders History'}
				className={
					location.pathname === '/account/orders-history'
						? s.accountBtnActivated
						: s.accountBtn
				}
			/>
			<AccountBtn
				text={'Favorites'}
				className={
					location.pathname === '/account/favorites'
						? s.accountBtnActivated
						: s.accountBtn
				}
			/>
		</div>
	);
}
