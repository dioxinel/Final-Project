import React, { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import { FormikInput } from '../../../components/Form/Input/FormikInput';
import { TotalPrice } from './TotalPrice';
import { CountryInput } from '../../../components/Form/Input/CountryInput';

import s from './CartForm.module.scss';

import { validationSchema } from './validationSchema';
import api from '../../../../api';
import { removeCartItems } from '../../../../store/actions';
import { useAsyncRequest } from '../../../../utils/useAsyncRequest';

export const CartForm = ({ setIsOpen }) => {
	const store = useSelector((store) => store.viewer);
	const cart = useSelector((store) => store.cart);
	const dispatch = useDispatch();
	const [selected, setSelected] = useState('');

	const { asyncRequest, isLoading } = useAsyncRequest();

	async function onSubmit({ fullName, phone, city, address }) {
		const items = cart.items.map((item) => {
			return { productId: item.id, quantity: item.count };
		});

		const res = await asyncRequest(api.createOrder, {
			items,
			shipment: {
				fullName,
				phone,
				country: selected,
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
		city: '',
		address: '',
	};

	if (store.isLoggedIn) {
		initialValues = {
			fullName: store.viewer.fullName,
			phone: store.viewer.phone,
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
							<FormikInput
								name='fullName'
								label='Full Name'
								className={s.input}
								disabled={!cart.totalCount}
							/>
						</div>
						<div className={s.group}>
							<FormikInput
								name='phone'
								label='Phone'
								className={s.input}
								disabled={!cart.totalCount}
							/>
						</div>
						<div className={s.group}>
							<CountryInput
								setSelected={setSelected}
								selected={selected}
								disabled={!cart.totalCount}
								className={s.countryInput}
							/>
						</div>
						<div className={s.group}>
							<FormikInput
								name='city'
								label='City'
								className={s.input}
								disabled={!cart.totalCount}
							/>
						</div>
						<div className={s.group}>
							<FormikInput
								name='address'
								label='Address'
								className={s.input}
								disabled={!cart.totalCount}
							/>
						</div>
						<TotalPrice price={cart.totalPrice} numOfItem={cart.totalCount} />
						<button
							type={'submit'}
							disabled={!isValid || !cart.totalCount || !selected}
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
