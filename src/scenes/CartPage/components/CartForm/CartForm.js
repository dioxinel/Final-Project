import React from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import { Input } from '../../../components/Form/Input/Input';
import { TotalPrice } from './TotalPrice';
import { CountryField } from './CountryField';

import s from './CartForm.module.scss';

import { validationSchema } from './validationSchema';
import api from '../../../../api';
import { removeCartItems } from '../../../../store/actions';
import { useAsyncRequest } from '../../../../useAsyncRequest';

export const CartForm = ({ setIsOpen }) => {
	const store = useSelector((store) => store.viewer);
	const cart = useSelector((store) => store.cart);
	const dispatch = useDispatch();

	const { asyncRequest, isLoading } = useAsyncRequest();

	async function onSubmit({ fullName, phone, country, city, address }) {
		const items = cart.items.map((item) => {
			return { productId: item.id, quantity: item.count };
		});

		const res = await asyncRequest(api.createOrder, {
			items,
			shipment: {
				fullName,
				phone,
				country,
				city,
				address,
			},
		});

		if (typeof res === 'string') {
			return;
		}

		dispatch(removeCartItems());
		setIsOpen(true);
	}

	let initialValues = {
		fullName: '',
		phone: '',
		country: '',
		city: '',
		address: '',
	};

	if (store.isLoggedIn) {
		initialValues = {
			fullName: store.viewer.fullName,
			phone: store.viewer.phone,
			country: store.viewer.country ? store.viewer.country : '',
			city: store.viewer.city ? store.viewer.city : '',
			address: store.viewer.address ? store.viewer.address : '',
		};
	}

	const formikProps = {
		initialValues,
		onSubmit,
		validationSchema: validationSchema,
	};

	return (
		<div className={s.cartForm}>
			<Formik {...formikProps}>
				{({ values, isValid, handleSubmit, dirty }) => (
					<form className={s.form}>
						<div className={s.group}>
							<Input
								name='fullName'
								label='Full Name'
								className={s.input}
								disabled={!cart.totalCount}
							/>
						</div>
						<div className={s.group}>
							<Input
								name='phone'
								label='Phone'
								className={s.input}
								disabled={!cart.totalCount}
							/>
						</div>
						<div className={s.group}>
							<CountryField
								name='country'
								label='Country'
								className={s.input}
								disabled={!cart.totalCount}
							/>
						</div>
						<div className={s.group}>
							<Input
								name='city'
								label='City'
								className={s.input}
								disabled={!cart.totalCount}
							/>
						</div>
						<div className={s.group}>
							<Input
								name='address'
								label='Address'
								className={s.input}
								disabled={!cart.totalCount}
							/>
						</div>
						<TotalPrice price={cart.totalPrice} numOfItem={cart.totalCount} />
						<button
							type={'submit'}
							disabled={!isValid || !dirty || !cart.totalCount}
							onClick={handleSubmit}
							className={s.submitBtn}
						>
							{isLoading ? (
								<ClipLoader color='#fff' loading={isLoading} size={15} />
							) : (
								'Confirms the purchase'
							)}
						</button>
					</form>
				)}
			</Formik>
			<Link to={'/'} className={s.continueShopping}>
				Continue shopping
			</Link>
		</div>
	);
};
