import React from 'react';

import s from '../ProductModal.module.scss';

export function AddProductBtn({ text, className }) {
	return <button className={`${s.addProductBtn} ${className}`}>{text}</button>;
}
