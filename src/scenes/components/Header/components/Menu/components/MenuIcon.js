import React from 'react';
import Icon from '../../../../Icon';

import s from '../Menu.module.scss';

export function MenuIcon() {
	const openMenu = () => {
		if (document.getElementById('menuContent')) {
			const event = new Event('onClose');
			document.getElementById('menu').dispatchEvent(event);
			return;
		}
		const event = new Event('onOpen');
		document.getElementById('menu').dispatchEvent(event);
	};

	return (
		<div className={s.menu}>
			<Icon name={'menu'} onClick={openMenu} />
		</div>
	);
}
