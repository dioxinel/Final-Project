import React from 'react';
import { useSelector } from 'react-redux';

import s from './DropDownMenu.module.scss';

export function ViewerInfo() {
	const store = useSelector((store) => store.viewer);

	return (
		<div className={s.viewerInfo}>
			<h4 className={s.viewerName}>{store.viewer.fullName}</h4>
			<h4 className={s.viewerEmail}>{store.viewer.email}</h4>
		</div>
	);
}
