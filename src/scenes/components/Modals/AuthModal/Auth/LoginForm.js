import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { Input } from '../../../Form/Input/Input';
import { PasswordField } from '../../../Form/Input/PasswordField';

import s from './Auth.module.scss';

export function LoginForm({
	fields,
	changeFieldValue,
	handleSubmit,
	isLoading,
	error,
}) {
	return (
		<form onSubmit={(evt) => handleSubmit(evt)} className={s.registerForm}>
			<div className={s.inputContainer}>
				<Input
					type='email'
					name='email'
					value={fields.email}
					className={s.input}
					changeFieldValue={changeFieldValue}
					placeholder={'Email'}
					error={error}
				/>
			</div>
			<PasswordField
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
