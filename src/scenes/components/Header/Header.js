import React from 'react';
import s from './Header.module.scss';
import { Logo } from './Logo';
import { RightPartHeader } from './RightPartHeader';

export function Header() {
	return (
		<div className={s.header}>
			<Logo />
			<RightPartHeader />
		</div>
	);
}
