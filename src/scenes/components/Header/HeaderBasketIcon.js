import React from 'react';

import Icon from '../Icon';

import s from './Header.module.scss';

export function HeaderBasketIcon() {
	return <Icon name={'header-basket'} className={s.basketIcon} />;
}
