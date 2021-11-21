import React, { useEffect, useState, useRef } from 'react';
import { Transition } from 'react-transition-group';

import { MenuContent } from './components/MenuContent';

import s from './Menu.module.scss';

export function Menu() {
	const [isOpen, setIsOpen] = useState(false);

	const nodeRef = useRef(null);

	useEffect(() => {
		const menu = nodeRef.current;

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

	const duration = 300;

	const defaultStyle = {
		overflow: 'hidden',
		transition: `height ${duration}ms ease-in-out`,
		height: 0,
	};

	const transitionStyles = {
		entering: { height: '200px' },
		entered: { height: '200px' },
		exiting: { height: 0 },
		exited: { height: 0 },
	};

	return (
		<div className={s.menu}>
			<Transition in={isOpen} timeout={duration} nodeRef={nodeRef}>
				{(state) => (
					<div
						id={'menu'}
						ref={nodeRef}
						style={{
							...defaultStyle,
							...transitionStyles[state],
						}}
					>
						<MenuContent />
					</div>
				)}
			</Transition>
		</div>
	);
}
