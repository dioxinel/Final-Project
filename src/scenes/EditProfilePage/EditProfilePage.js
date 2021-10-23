import React from 'react';

import { AccountMenu } from '../components/AccountMenu/AccountMenu';
import { ChangePassword } from './components/ChangePassword';
import { MainInfo } from './components/MainInfo';

import s from './EditProfilePage.module.scss';

export function EditProfilePage() {
	return (
		<div className={s.editProfilePageContainer}>
			<div className={s.editProfilePage}>
				<AccountMenu />
				<MainInfo />
				<ChangePassword />
			</div>
		</div>
	);
}
