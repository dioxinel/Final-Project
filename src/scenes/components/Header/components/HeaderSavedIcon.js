import React from 'react';
import { useHistory } from 'react-router';

import Icon from '../../Icon';

import s from '../Header.module.scss';

export function HeaderSavedIcon() {
	const history = useHistory();

	const handleClick = (evt) => {
		evt.preventDefault();
		history.push('/account/favorites');
	};

	return (
		<a href={'/account/favorites'} onClick={handleClick}>
			<Icon name={'header-heart'} className={s.savedIcon} />
		</a>
	);
}
