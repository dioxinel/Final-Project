import React from 'react';
import { useSelector } from 'react-redux';

import { UserAvatar } from '../../components/User/UserAvatar';

import s from '../Account.module.scss';

export function UserInfo() {
	const store = useSelector((store) => store.viewer);

	return (
		<div className={s.userInfo}>
			<UserAvatar user={store.viewer} className={s.userAvatar} />
			<h2 className={s.userFullName}>{store.viewer.fullName}</h2>
		</div>
	);
}
