import React from 'react';
import s from './Auth.module.scss';

export function AuthTitle({ text }) {
	return <div className={s.authTitle}>{text}</div>;
}
