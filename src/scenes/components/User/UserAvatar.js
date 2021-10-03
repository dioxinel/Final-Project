import React from 'react';
import { getInitials } from './getInitials';

export function UserAvatar({ user, className }) {
	const userInitial = getInitials(user.fullName.split(' '));
	return <div className={className}>{userInitial}</div>;
}
