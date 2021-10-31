import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logout } from './Logout';
import { ViewerInfo } from './ViewerInfo';

import s from './DropDownMenu.module.scss';

export function DropDownContent({ closeMenu }) {
	useEffect(() => {
		function outerClickListener(e) {
			const node = e.target.closest('#dropDownMenu');
			if (!node) {
				closeMenu();
			}

			const link = e.target.closest('a');
			if (link) {
				closeMenu();
			}
		}

		window.addEventListener('click', outerClickListener);
		return () => {
			window.removeEventListener('click', outerClickListener);
		};
	}, [closeMenu]);

	return (
		<div id='dropDownMenu'>
			<div className={s.dropDownMenu}>
				<ViewerInfo />
				<Link to={'/account/settings'} className={s.linkToSettings}>
					{'Settings'}
				</Link>
				<Logout closeMenu={closeMenu} />
			</div>
		</div>
	);
}
