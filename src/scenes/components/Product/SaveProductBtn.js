import React from 'react';

import Icon from '../Icon';

import s from './Product.module.scss';

export function SaveProductBtn({ isSaved }) {
	return (
		<button className={s.saveContainer}>
			<Icon
				name={isSaved ? 'remove-from-favorites' : 'add-to-favorites'}
				className={s.save}
			/>
		</button>
	);
}
