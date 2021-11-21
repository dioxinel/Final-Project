import React, { useState } from 'react';
import Icon from '../../../../Icon';

import s from '../Menu.module.scss';

export function MenuIcon() {
	const [open, setOpen] = useState(false);

	const openMenu = () => {
		if (open) {
			const event = new Event('onClose');
			document.getElementById('menu').dispatchEvent(event);
			setOpen(false);
			return;
		}
		const event = new Event('onOpen');
		document.getElementById('menu').dispatchEvent(event);
		setOpen(true);
	};

	return (
		<div className={s.menuIcon}>
			<Icon name={'menu'} onClick={openMenu} />
		</div>
	);
}
