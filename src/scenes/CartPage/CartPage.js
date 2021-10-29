import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { CartForm } from './components/CartForm/CartForm';
import { CartList } from './components/CartList';
import { SuccessOrderModal } from '../components/Modals/SuccessesOrderModal.js/SuccessOrderModal';

import s from './CartPage.module.scss';
import { routes } from '../../router/Router';
import { AuthModalContext } from '../../App';

export function CartPage() {
	const { setIsOpen, setModalCondition } = useContext(AuthModalContext);
	const [isOpen, setOpen] = useState(false); // SuccessOrderModal
	const store = useSelector((store) => store.viewer);
	const loading = useSelector((store) => store.loading);
	const history = useHistory();

	if (!store.isLoggedIn && !loading.isLoading) {
		history.push(routes.home);
		setIsOpen(true);
		setModalCondition(true);
		return '';
	}

	return (
		<>
			<div className={s.cartPageContainer}>
				<div className={s.cartPage}>
					<div>
						<div className={s.myCart}>My cart</div>
						<CartList />
					</div>
					<CartForm setIsOpen={setOpen} />
				</div>
			</div>
			<SuccessOrderModal setIsOpen={setOpen} isOpen={isOpen} />
		</>
	);
}
