import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import s from './DropDownMenu.module.scss';

import {
	removeCartItems,
	removeViewer,
	setProductsFilterParams,
} from '../../../../../store/actions';
import api from '../../../../../api';

export function Logout({ closeMenu }) {
	const history = useHistory();

	const dispatch = useDispatch();
	const handleLogout = (evt) => {
		evt.preventDefault();
		try {
			closeMenu();
		} catch {
			const event = new Event('onClose');
			document.getElementById('menu').dispatchEvent(event);
		}
		dispatch(removeViewer());
		api.logout();
		dispatch(
			setProductsFilterParams({
				category: '',
				sort: '',
				fetchFrom: 0,
				keywords: '',
				isMoreProducts: true,
				isFetching: true,
			}),
		);
		dispatch(removeCartItems());

		history.push('/');
	};

	return (
		<a href={'/'} className={s.logout} onClick={handleLogout}>
			Logout
		</a>
	);
}
