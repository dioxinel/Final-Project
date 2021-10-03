import React from 'react';
import Icon from '../Icon';
import s from './Header.module.scss';

export function HeaderSavedIcon() {
	return <Icon name={'header-heart'} className={s.savedIcon} />;
}
