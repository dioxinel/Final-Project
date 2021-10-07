import React from 'react';
import { useSelector } from 'react-redux';
import { viewerSelector } from '../../../../store/selectors';
import { AuthUnLogged } from './AuthUnLogged';
import { Viewer } from './Viewer';

export function AuthHeader() {
	const viewer = useSelector(viewerSelector);

	if (Object.keys(viewer).length !== 0) {
		return <Viewer viewer={viewer.viewer} />;
	}
	return <AuthUnLogged />;
}