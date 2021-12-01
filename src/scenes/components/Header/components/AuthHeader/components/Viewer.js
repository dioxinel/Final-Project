import React from 'react';

import { UserAvatar } from '../../../../User/UserAvatar';
import { DropDownMenu } from '../../DropDownMenu/DropDownMenu';
import { HeaderCartIcon } from '../../HeaderCartIcon';
import { HeaderSavedIcon } from '../../HeaderSavedIcon';
import { ViewerGreeting } from './ViewerGreeting';

import s from '../AuthHeader.module.scss';

export function Viewer({ viewer }) {
	return (
		<div className={s.viewer}>
			<nav>
				<HeaderSavedIcon />
				<HeaderCartIcon />
			</nav>
			<ViewerGreeting fullName={viewer.fullName} />
			<UserAvatar user={viewer} className={s.avatar} />
			<DropDownMenu />
		</div>
	);
}
