import React from 'react';
import { useSelector } from 'react-redux';

import { AuthUnLogged } from './components/AuthUnLogged';
import { Viewer } from './components/Viewer';

export function AuthHeader() {
	const viewer = useSelector((store) => store.viewer);

	if (viewer.isLoggedIn) {
		return <Viewer viewer={viewer.viewer} />;
	}
	return <AuthUnLogged />;
}
