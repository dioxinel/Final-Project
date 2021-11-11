import { Formik } from 'formik';
import React, { useContext } from 'react';

import { ChangePasswordForm } from './ChangePasswordForm';

import s from '../EditProfilePage.module.scss';
import { useAsyncRequest } from '../../../useAsyncRequest';
import api from '../../../api';
import { validationSchemaChangePassword } from './validation';
import { NotificationsContext } from '../../../App';

export function ChangePassword() {
	const { notifications, setNotifications } = useContext(NotificationsContext);
	const { asyncRequest, isLoading } = useAsyncRequest();

	const onSubmit = async ({ oldPassword, password }, { setFieldError }) => {
		const res = await asyncRequest(api.changePassword, { oldPassword, password });

		if (typeof res === 'string') {
			if (res === 'Request failed with status code 401')
				setFieldError('oldPassword', 'Password incorrect');
			return;
		}

		setNotifications([
			...notifications,
			{
				text: 'Your password is updated successfully',
				type: 'alert',
			},
		]);
	};

	const initialValues = {
		oldPassword: '',
		password: '',
		confirmPassword: '',
	};

	const formikProps = {
		validationSchema: validationSchemaChangePassword,
		initialValues,
		onSubmit,
	};

	return (
		<div className={`${s.editProfile} ${s.changePassword}`}>
			<h2 className={s.editProfileTitle}>{'Change password'}</h2>
			<div className={s.editProfileForm}>
				<Formik {...formikProps}>
					{({ isValid, handleSubmit, dirty }) => (
						<ChangePasswordForm
							handleSubmit={handleSubmit}
							isValid={isValid}
							isLoading={isLoading}
							dirty={dirty}
						/>
					)}
				</Formik>
			</div>
		</div>
	);
}
