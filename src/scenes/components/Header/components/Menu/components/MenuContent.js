import React from 'react';
import { useSelector } from 'react-redux';
import { UserAvatar } from '../../../../User/UserAvatar';
import { Logout } from '../../DropDownMenu/Logout';
import { SettingsLink } from '../../DropDownMenu/SettingsLink';
import { ViewerInfo } from '../../DropDownMenu/ViewerInfo';
import { HeaderCartIcon } from '../../HeaderCartIcon';
import { HeaderSavedIcon } from '../../HeaderSavedIcon';

import s from '../Menu.module.scss';

export function MenuContent({ isOpen }) {
	const store = useSelector((store) => store.viewer);

	if (!store.isLoggedIn) {
		return '';
	}

	return (
		<>
			{isOpen ? (
				<div className={`${s.menuContent}`} id={'menuContent'}>
					<div className={s.menuContentContainer}>
						<UserAvatar user={store.viewer} className={s.avatar} />
						<HeaderCartIcon color={'#110f21'} />
						<HeaderSavedIcon color={'#110f21'} />
					</div>

					<ViewerInfo />
					<SettingsLink className={s.settingsLink} />
					<Logout />
				</div>
			) : (
				''
			)}
		</>
	);
}
