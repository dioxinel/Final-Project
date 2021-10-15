import React from 'react';
import { useDispatch } from 'react-redux';

import { clearProductsStore, removeViewer } from '../../../../store/actions';

import s from './DropDownMenu.module.scss';

import api from '../../../../api';

export function Logout() {
	const dispatch = useDispatch();
	const handleLogout = () => {
		api.logout();
		dispatch(removeViewer());
		dispatch(clearProductsStore());
	};

	return (
		<div className={s.logout} onClick={handleLogout}>
			Logout
		</div>
	);
}
