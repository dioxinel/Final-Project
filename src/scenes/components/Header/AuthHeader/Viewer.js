import React from 'react';
import Icon from '../../Icon';
import { UserAvatar } from '../../User/UserAvatar';
import s from './AuthHeader.module.scss';
import { ViewerGreeting } from './ViewerGreeting';

export function Viewer({ viewer }) {
	return (
		<div className={s.viewer}>
			<ViewerGreeting fullName={viewer.fullName} />
			<UserAvatar user={viewer} className={s.avatar} />
			<Icon name={'header-tick'} />
		</div>
	);
}
