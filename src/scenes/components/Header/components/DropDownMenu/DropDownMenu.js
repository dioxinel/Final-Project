import React, { useEffect, useState } from 'react';

import Icon from '../../../Icon';
import { DropDownContent } from './DropDownContent';

import s from './DropDownMenu.module.scss';

export function DropDownMenu() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		return () => {
			setOpen(false);
		};
	}, []);

	function closeMenu() {
		setOpen(false);
	}

	function openMenu() {
		if (open) return closeMenu();
		setOpen(true);
	}

	return (
		<div id='dropDownMenu'>
			<Icon
				name={'arrow'}
				onClick={openMenu}
				className={s.dropDownTick}
				fill={'white'}
			/>
			{open && <DropDownContent closeMenu={closeMenu} />}
		</div>
	);
}
