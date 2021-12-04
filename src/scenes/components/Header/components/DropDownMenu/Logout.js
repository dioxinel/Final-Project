import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import s from './DropDownMenu.module.scss';

import {
	clearProductsStore,
	removeCartItems,
	removeViewer,
} from '../../../../../store/actions';
import api from '../../../../../api';

export function Logout({ closeMenu }) {
	const history = useHistory();

	const dispatch = useDispatch();
	const handleLogout = (evt) => {
		evt.preventDefault();
		const event = new Event('onClose');
		try {
			closeMenu();
			document.getElementById('menu').dispatchEvent(event);
		} catch {
			document.getElementById('menu').dispatchEvent(event);
		}
		dispatch(removeViewer());
		api.logout();
		dispatch(clearProductsStore());
		dispatch(removeCartItems());

		history.push('/');
	};

	return (
		<a href={'/'} className={s.logout} onClick={handleLogout}>
			Logout
		</a>
	);
}
