import React from 'react';
import { ProductPicture } from '../../ProductPicture';

import s from '../ListItem.module.scss';

export function ListItemPicture({ item }) {
	return <ProductPicture item={item} className={s.listItemPicture} />;
}
