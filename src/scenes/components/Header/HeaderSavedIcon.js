import React from 'react';
import { useHistory } from 'react-router';

import Icon from '../Icon';

import s from './Header.module.scss';

export function HeaderSavedIcon() {
	const history = useHistory();

	const handleClick = () => {
		history.push('/account/favorites');
	};

	return (
		<Icon name={'header-heart'} className={s.savedIcon} onClick={handleClick} />
	);
}
