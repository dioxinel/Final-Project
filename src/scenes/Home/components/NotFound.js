import React from 'react';

import s from '../Home.module.scss';

export function NotFound() {
	return (
		<div className={s.notFound}>
			<div>{'No Results Found'}</div>
			<p>
				{
					'We did not find any article that matches this search Make sure that the search text is entered correctly Try using other search criteria'
				}
			</p>
		</div>
	);
}
