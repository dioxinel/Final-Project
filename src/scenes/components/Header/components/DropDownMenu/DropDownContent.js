import React from 'react';

import { Logout } from './Logout';
import { ViewerInfo } from './ViewerInfo';
import { SettingsLink } from './SettingsLink';

import s from './DropDownMenu.module.scss';

export function DropDownContent({ closeMenu }) {
	return (
		<div id='dropDownMenu'>
			<div className={s.dropDownMenu}>
				<ViewerInfo />
				<SettingsLink to={'/account/settings'} className={s.linkToSettings} />
				<Logout closeMenu={closeMenu} />
			</div>
		</div>
	);
}
