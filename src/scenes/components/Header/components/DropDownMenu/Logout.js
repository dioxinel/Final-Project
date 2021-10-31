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
	const handleLogout = () => {
		api.logout();
		dispatch(removeViewer());
		dispatch(clearProductsStore());
		dispatch(removeCartItems());
		history.push('/');
	};

	return (
		<div className={s.logout} onClick={handleLogout}>
			Logout
		</div>
	);
}
