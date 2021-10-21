import React, { useState } from 'react';

import { CartForm } from './components/CartForm/CartForm';
import { CartList } from './components/CartList';
import { SuccessOrderModal } from '../components/Modals/SuccessesOrderModal.js/SuccessOrderModal';

import s from './CartPage.module.scss';

export function CartPage() {
	const [isOpen, setIsOpen] = useState(false); // SuccessOrderModal

	return (
		<>
			<div className={s.cartPageContainer}>
				<div className={s.cartPage}>
					<div>
						<div className={s.myCart}>My cart</div>
						<CartList />
					</div>
					<CartForm setIsOpen={setIsOpen} />
				</div>
			</div>
			<SuccessOrderModal setIsOpen={setIsOpen} isOpen={isOpen} />
		</>
	);
}
