import React from 'react';

import { AccountMenu } from '../components/AccountMenu/AccountMenu';

import s from './EditProfilePage.module.scss';

export function EditProfilePage() {
	return (
		<div className={s.editProfilePageContainer}>
			<div className={s.editProfilePage}>
				<AccountMenu />
				Edit Profile
			</div>
		</div>
	);
}
