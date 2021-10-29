import React, { useContext } from 'react';

import { Switch, Route, useHistory } from 'react-router';

import { AccountFavorites } from '../AccountFavorites/AccountFavorites';
import { EditProfilePage } from '../EditProfilePage/EditProfilePage';
import { OrdersHistoryPage } from '../OrdersHistoryPage/OrdersHistoryPage';

import { routes } from '../../router/Router';
import { AuthModalContext } from '../../App';
import { AccountMenu } from './components/AccountMenu';

import s from './Account.module.scss';

export function Account() {
	const { setIsOpen, setModalCondition } = useContext(AuthModalContext);

	const history = useHistory();

	if (!window.localStorage.getItem('___token')) {
		history.push(routes.home);
		setIsOpen(true);
		setModalCondition(true);
		return '';
	}

	return (
		<div className={s.accountPageContainer}>
			<div className={s.accountPage}>
				<AccountMenu />
				<Switch>
					<Route exact path={routes.favorites}>
						<AccountFavorites />
					</Route>
					<Route exact path={routes.orders}>
						<OrdersHistoryPage />
					</Route>
					<Route exact path={routes.settings}>
						<EditProfilePage />
					</Route>
				</Switch>
			</div>
		</div>
	);
}
