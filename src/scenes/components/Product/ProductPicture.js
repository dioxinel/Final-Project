import React from 'react';

export function ProductPicture({ item, className }) {
	return <img src={item.picture} alt={'description'} className={className} />;
}
