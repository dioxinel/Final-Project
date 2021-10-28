import React from 'react';
import { useDispatch } from 'react-redux';

import s from './DropDownMenu.module.scss';

import { clearProductsStore, removeViewer } from '../../../../../store/actions';
import api from '../../../../../api';
import { useHistory } from 'react-router';

export function Logout({ closeMenu }) {
	const history = useHistory();

	const dispatch = useDispatch();
	const handleLogout = () => {
		api.logout();
		dispatch(removeViewer());
		dispatch(clearProductsStore());
		history.push('/');
		closeMenu();
	};

	return (
		<div className={s.logout} onClick={handleLogout}>
			Logout
		</div>
	);
}
