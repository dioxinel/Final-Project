import { Formik } from 'formik';
import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MainInfoForm } from './MainInfoForm';

import s from '../EditProfilePage.module.scss';
import { validationSchemaMainInfo } from './validation';
import { useAsyncRequest } from '../../../useAsyncRequest';
import { setViewer } from '../../../store/actions';
import { NotificationsContext } from '../../../App';
import api from '../../../api';

export function MainInfo() {
	const [selected, setSelected] = useState('');
	const { notifications, setNotifications } = useContext(NotificationsContext);
	const { asyncRequest, isLoading } = useAsyncRequest();
	const store = useSelector((store) => store.viewer);
	const dispatch = useDispatch();

	const onSubmit = async (
		{ fullName, email, phone, city, address },
		{ setFieldError },
	) => {
		const res = await asyncRequest(api.editProfile, {
			fullName,
			email,
			phone,
			country: selected,
			city,
			address,
		});

		if (typeof res === 'string') {
			if (res === 'Request failed with status code 500')
				setFieldError('email', 'Such email is already used');
			return;
		}
		setNotifications([
			...notifications,
			{
				text: 'Account details are updated successfully',
				type: 'alert',
			},
		]);
		dispatch(
			setViewer({ fullName, email, phone, country: selected, city, address }),
		);
	};

	const initialValues = {
		fullName: store.viewer.fullName,
		email: store.viewer.email,
		phone: store.viewer.phone,
		city: store.viewer.city || '',
		address: store.viewer.address || '',
	};

	const formikProps = {
		validationSchema: validationSchemaMainInfo,
		initialValues,
		onSubmit,
	};

	return (
		<div className={s.editProfile}>
			<div className={s.editProfileTitle}>{'Main information'}</div>
			<div className={s.editProfileForm}>
				<Formik {...formikProps}>
					{({ isValid, handleSubmit }) => (
						<MainInfoForm
							handleSubmit={handleSubmit}
							isValid={isValid}
							isLoading={isLoading}
							selected={selected}
							setSelected={setSelected}
						/>
					)}
				</Formik>
			</div>
		</div>
	);
}
