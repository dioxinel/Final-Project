import React from 'react';

import { ProductTitle } from '../ProductTitle';
import { ItemPrice } from './components/ItemPrice';
import { MiddlePart } from './components/MiddlePart';
import { ListItemPicture } from './components/ListItemPicture';
import { MiddlePartOrder } from './components/MiddlePartOrder';

import s from './ListItem.module.scss';

export function ListItem({ children }) {
	return <li className={s.listItem}>{children}</li>;
}

ListItem.ProductPicture = ListItemPicture;
ListItem.ProductTitle = ProductTitle;
ListItem.MiddlePart = MiddlePart;
ListItem.MiddlePartOrder = MiddlePartOrder;
ListItem.ItemPrice = ItemPrice;
