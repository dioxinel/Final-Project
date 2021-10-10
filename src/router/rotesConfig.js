import { Home } from '../scenes/Home/Home.js';
import { MainLayout } from './MainLayout.js';

export const rotesConfig = [
	{
		layout: MainLayout,
		routes: [['/', Home, true]],
	},
];
