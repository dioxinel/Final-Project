import React from 'react';

import s from './Auth.module.scss';

export function AuthTitle({ text }) {
	return <h2 className={s.authTitle}>{text}</h2>;
}
