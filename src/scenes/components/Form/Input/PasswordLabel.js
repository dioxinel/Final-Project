import React from 'react';

import s from './Input.module.scss';

export function PasswordLabel() {
	return (
		<p className={s.passwordLabel}>
			{
				'The password has to be at least at least 1 letter, 1special symbol, 1 number'
			}
		</p>
	);
}
