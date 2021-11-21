import React from 'react';

import { AuthHeader } from './components/AuthHeader/AuthHeader';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu/Menu';
import { MenuIcon } from './components/Menu/components/MenuIcon';

import s from './Header.module.scss';
import { useSelector } from 'react-redux';

export function Header() {
	const store = useSelector((store) => store.viewer);

	return (
		<>
			<header className={s.header}>
				<Logo />
				<AuthHeader />
				{store.isLoggedIn && <MenuIcon />}
			</header>
			<Menu />
		</>
	);
}
