import { MainLayout } from './MainLayout.js';

export const rotesConfig = [
	{
		layout: MainLayout,
		routes: [
			['/auth/register', 'Reg', true],
			['/auth/login', 'Log', true],
		],
	},
];
