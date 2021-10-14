import React from 'react';
import { AuthHeader } from './AuthHeader/AuthHeader';
import s from './Header.module.scss';
import { Logo } from './Logo';

export function Header() {
	return (
		<div className={s.header}>
			<Logo />
			<AuthHeader />
		</div>
	);
}
