import React from 'react';
import { useDispatch } from 'react-redux';

import s from './DropDownMenu.module.scss';

import { clearProductsStore, removeViewer } from '../../../../../store/actions';
import api from '../../../../../api';

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
