import React, { useEffect, useState } from 'react';
import { MenuContent } from './components/MenuContent';

export function Menu() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const menu = document.getElementById('menu');
		const onOpen = menu.addEventListener('onOpen', () => {
			setIsOpen(true);
		});
		const onClose = menu.addEventListener('onClose', () => {
			setIsOpen(false);
		});
		return () => {
			menu.removeEventListener('onOpen', onOpen);
			menu.removeEventListener('onClose', onClose);
		};
	}, []);
	return (
		<div id={'menu'}>
			<MenuContent isOpen={isOpen} />
		</div>
	);
}
