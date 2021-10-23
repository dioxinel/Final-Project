import React from 'react';
import { ClipLoader } from 'react-spinners';

import { FormikInput } from '../../components/Form/Input/FormikInput';

import s from '../EditProfilePage.module.scss';

export const ChangePasswordForm = ({
	handleSubmit,
	isValid,
	isLoading,
	dirty,
}) => {
	return (
		<form className={s.form}>
			<div className={s.group}>
				<FormikInput
					name='oldPassword'
					type={'password'}
					placeholder={'Current password'}
					className={s.input}
				/>
			</div>
			<div className={s.group}>
				<FormikInput
					name='password'
					type={'password'}
					placeholder={'New password'}
					className={s.input}
				/>
			</div>
			<div className={s.group}>
				<FormikInput
					name='confirmPassword'
					type={'password'}
					placeholder={'Confirm password'}
					className={s.input}
				/>
			</div>
			<button
				type={'submit'}
				disabled={!isValid || !dirty}
				onClick={handleSubmit}
				className={s.submitBtn}
			>
				{isLoading ? (
					<ClipLoader color='#fff' loading={isLoading} size={15} />
				) : (
					'Change password'
				)}
			</button>
		</form>
	);
};
