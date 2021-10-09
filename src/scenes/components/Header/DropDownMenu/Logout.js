import React from 'react';
import { useDispatch } from 'react-redux';
import api from '../../../../api';
import { removeViewer } from '../../../../store/actions';
import s from './DropDownMenu.module.scss';

export function Logout() {
	const dispatch = useDispatch();
	const handleLogout = () => {
		api.logout();
		dispatch(removeViewer());
	};

	return (
		<div className={s.logout} onClick={handleLogout}>
			Logout
		</div>
	);
}
