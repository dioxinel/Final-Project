import React, { useState } from 'react';
import s from './DropDownMenu.module.scss';
import Icon from '../../Icon';
import { Logout } from './Logout';
import { ViewerInfo } from './ViewerInfo';
import { Link } from 'react-router-dom';

export function DropDownMenu() {
	const [open, setOpen] = useState(false);

	function outerClickListener(e) {
		const node = e.target.closest('#dropDownMenu');

		if (!node) {
			closeMenu();
		}
	}

	function closeMenu() {
		document.removeEventListener('click', outerClickListener);
		setOpen(false);
	}

	function openMenu() {
		document.addEventListener('click', outerClickListener);
		if (open) return closeMenu();
		setOpen(true);
	}

	return (
		<div id="dropDownMenu">
			<Icon name={'header-tick'} onClick={openMenu} />
			{open && (
				<div className={s.dropDownMenu}>
					<ViewerInfo />
					<Link to={'/settings'} className={s.linkToSettings}>
						{'Settings'}
					</Link>
					<Logout />
				</div>
			)}
		</div>
	);
}
