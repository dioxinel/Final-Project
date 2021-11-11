import React from 'react';

import s from '../AuthHeader.module.scss';

export function ViewerGreeting({ fullName }) {
	const viewerName = fullName.split(' ')[0];
	return <p className={s.viewerGreeting}>{`Welcome, ${viewerName}!`}</p>;
}
