import React from 'react';
import { ClipLoader } from 'react-spinners';

import { FormikInput } from '../../components/Form/Input/FormikInput';

import s from '../EditProfilePage.module.scss';

export const MainInfoForm = ({ handleSubmit, isValid, isLoading }) => {
	return (
		<form className={s.form}>
			<div className={s.group}>
				<FormikInput name='fullName' label='Full Name' className={s.input} />
			</div>
			<div className={s.group}>
				<FormikInput name='email' label='Email' className={s.input} />
			</div>
			<div className={s.group}>
				<FormikInput name='phone' label='Phone' className={s.input} />
			</div>
			<div className={s.group}>
				<FormikInput name='country' label='Country' className={s.input} />
			</div>
			<div className={s.group}>
				<FormikInput name='city' label='City' className={s.input} />
			</div>
			<div className={s.group}>
				<FormikInput name='address' label='Address' className={s.input} />
			</div>
			<button
				type={'submit'}
				disabled={!isValid}
				onClick={handleSubmit}
				className={s.submitBtn}
			>
				{isLoading ? (
					<ClipLoader color='#fff' loading={isLoading} size={15} />
				) : (
					'Save'
				)}
			</button>
		</form>
	);
};
