import { Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MainInfoForm } from './MainInfoForm';

import s from '../EditProfilePage.module.scss';
import { validationSchemaMainInfo } from './validation';
import { useAsyncRequest } from '../../../useAsyncRequest';
import api from '../../../api';
import { setViewer } from '../../../store/actions';

export function MainInfo() {
	const { asyncRequest, isLoading } = useAsyncRequest();
	const store = useSelector((store) => store.viewer);
	const dispatch = useDispatch();

	const onSubmit = async (
		{ fullName, email, phone, country, city, address },
		{ setFieldError },
	) => {
		const res = await asyncRequest(api.editProfile, {
			fullName,
			email,
			phone,
			country,
			city,
			address,
		});

		if (typeof res === 'string') {
			if (res === 'Request failed with status code 500')
				setFieldError('email', 'Such email is already used');
			return;
		}

		dispatch(setViewer({ fullName, email, phone, country, city, address }));
	};

	const initialValues = {
		fullName: store.viewer.fullName,
		email: store.viewer.email,
		phone: store.viewer.phone,
		country: store.viewer.country || '',
		city: store.viewer.city || '',
		address: store.viewer.address || '',
	};

	const formikProps = {
		validationSchema: validationSchemaMainInfo,
		initialValues,
		onSubmit,
	};

	return (
		<div className={s.mainInfo}>
			<div className={s.mainInfoTitle}>{'Main information'}</div>
			<div className={s.mainInfoForm}>
				<Formik {...formikProps}>
					{({ isValid, handleSubmit }) => (
						<MainInfoForm
							handleSubmit={handleSubmit}
							isValid={isValid}
							isLoading={isLoading}
						/>
					)}
				</Formik>
			</div>
		</div>
	);
}
