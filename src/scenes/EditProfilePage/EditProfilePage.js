import React from 'react';

import { ChangePassword } from './components/ChangePassword';
import { MainInfo } from './components/MainInfo';

export function EditProfilePage() {
	return (
		<>
			<MainInfo />
			<ChangePassword />
		</>
	);
}
