import React from 'react';
import { useSelector } from 'react-redux';

import s from './DropDownMenu.module.scss';

export function ViewerInfo() {
	const store = useSelector((store) => store.viewer);

	return (
		<div className={s.viewerInfo}>
			<div className={s.viewerName}>{store.viewer.fullName}</div>
			<div className={s.viewerEmail}>{store.viewer.email}</div>
		</div>
	);
}
