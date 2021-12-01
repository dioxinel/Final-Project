import React from 'react';
import { useDropDown } from '../../../../../utils/useDropDown';

import Icon from '../../../Icon';
import { DropDownContent } from './DropDownContent';

import s from './DropDownMenu.module.scss';

export function DropDownMenu() {
	const { isOpen, openMenu, closeMenu } = useDropDown('#dropDownMenu');

	return (
		<div id='dropDownMenu'>
			<Icon
				name={'arrow'}
				onClick={openMenu}
				className={s.dropDownTick}
				fill={'white'}
			/>
			{isOpen && <DropDownContent closeMenu={closeMenu} />}
		</div>
	);
}
