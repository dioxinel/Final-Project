import React from 'react';
import { Input } from '../../../Input';
import s from './Auth.module.scss';

export function LoginForm({ fields, changeFieldValue, handleSubmit }) {
	return (
		<form onSubmit={(evt) => handleSubmit(evt)} className={s.registerForm}>
			<Input
				type="email"
				name="email"
				value={fields.email}
				validationPattern={/\S+@\S+/}
				className={s.input}
				changeFieldValue={changeFieldValue}
				placeholder={'Email'}
			/>
			<Input
				type="password"
				name="password"
				value={fields.password}
				changeFieldValue={changeFieldValue}
				className={s.input}
				placeholder={'Password'}
			/>

			<button type={'submit'} className={s.submitBtn}>
				Login
			</button>
		</form>
	);
}
