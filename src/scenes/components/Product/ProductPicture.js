import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';

export function ProductPicture({ item, className }) {
	return (
		<LazyLoadImage
			src={item.picture}
			alt={'description'}
			className={className}
			effect={'blur'}
		/>
	);
}
