import { useEffect, useState } from 'react';

export const useDropDown = (id) => {
	const [isOpen, setOpen] = useState(false);

	let outerClickEvent;
	useEffect(() => {
		return () => {
			window.removeEventListener('click', outerClickEvent, true);
			setOpen(false);
		};
	}, [outerClickEvent]);

	function outerClickListener(e) {
		const node = e.target.closest(id);
		if (!node) {
			closeMenu();
			return;
		}

		const link = e.target.closest('a');
		if (link) {
			closeMenu();
		}
	}

	function closeMenu() {
		window.removeEventListener('click', outerClickListener, true);
		setOpen(false);
	}

	function openMenu(e) {
		if (isOpen) return closeMenu();
		e.stopPropagation();
		outerClickEvent = window.addEventListener('click', outerClickListener, true);
		setOpen(true);
	}

	return { isOpen, openMenu, closeMenu };
};
