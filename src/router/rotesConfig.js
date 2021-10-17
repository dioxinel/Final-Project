import { AccountFavorites } from '../scenes/AccountFavorites/AccountFavorites.js';
import { CartPage } from '../scenes/CartPage/CartPage.js';
import { Home } from '../scenes/Home/Home.js';
import { MainLayout } from './MainLayout.js';

export const rotesConfig = [
	{
		layout: MainLayout,
		routes: [
			['/', Home, true],
			['/account/favorites', AccountFavorites, true],
			['/account/cart', CartPage, true],
		],
	},
];
