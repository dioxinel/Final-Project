import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { LoginInput } from '../../../Form/Input/LoginInput';
import { LoginPassword } from '../../../Form/Input/LoginPassword';

import s from './Auth.module.scss';

export function LoginForm({
	fields,
	changeFieldValue,
	handleSubmit,
	isLoading,
	error,
}) {
	return (
		<form onSubmit={(evt) => handleSubmit(evt)} className={s.authForm}>
			<LoginInput
				type='email'
				name='email'
				value={fields.email}
				changeFieldValue={changeFieldValue}
				placeholder={'Email'}
				error={error}
			/>
			<LoginPassword
				fields={fields}
				changeFieldValue={changeFieldValue}
				error={error}
			/>

			<button type={'submit'} className={s.submitBtn}>
				{isLoading ? (
					<ClipLoader color='#fff' loading={isLoading} size={15} />
				) : (
					'Login'
				)}
			</button>
		</form>
	);
}
