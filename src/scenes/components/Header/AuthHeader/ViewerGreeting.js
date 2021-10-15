import React from 'react';

import s from './AuthHeader.module.scss';

export function ViewerGreeting({ fullName }) {
	const viewerName = fullName.split(' ')[0];
	return <div className={s.viewerGreeting}>{`Welcome, ${viewerName}!`}</div>;
}
