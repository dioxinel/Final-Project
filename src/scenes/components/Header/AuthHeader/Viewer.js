import React from 'react';
import { UserAvatar } from '../../User/UserAvatar';
import { DropDownMenu } from '../DropDownMenu/DropDownMenu';
import s from './AuthHeader.module.scss';
import { ViewerGreeting } from './ViewerGreeting';

export function Viewer({ viewer }) {
	return (
		<div className={s.viewer}>
			<ViewerGreeting fullName={viewer.fullName} />
			<UserAvatar user={viewer} className={s.avatar} />
			<DropDownMenu />
		</div>
	);
}
