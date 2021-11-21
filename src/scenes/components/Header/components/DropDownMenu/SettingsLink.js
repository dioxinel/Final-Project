import React from 'react';
import { Link } from 'react-router-dom';

export function SettingsLink({ className }) {
	return (
		<Link to={'/account/settings'} className={className}>
			{'Settings'}
		</Link>
	);
}
