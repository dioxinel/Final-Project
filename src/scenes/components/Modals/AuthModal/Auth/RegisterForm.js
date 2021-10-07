import React from 'react';
import { Input } from '../../../Input';
import s from './Auth.module.scss';
import { PasswordField } from './PasswordField';
import { PasswordLabel } from './PasswordLabel';

export function RegisterForm({ fields, changeFieldValue, handleSubmit }) {
	return (
		<form onSubmit={(evt) => handleSubmit(evt)} className={s.registerForm}>
			<Input
				type="text"
				name="fullName"
				className={s.input}
				value={fields.fullName}
				validationPattern={/^[a-zA-Z\s]+$/}
				changeFieldValue={changeFieldValue}
				placeholder={'Full Name'}
			/>
			<Input
				type="email"
				name="email"
				className={s.input}
				value={fields.email}
				validationPattern={/\S+@\S+/}
				changeFieldValue={changeFieldValue}
				placeholder={'Email'}
			/>
			<Input
				type="text"
				name="phone"
				className={s.input}
				value={fields.phone}
				validationPattern={/^(\+)?([0-9]){10,14}$/}
				changeFieldValue={changeFieldValue}
				placeholder={'Phone number'}
			/>
			<PasswordField fields={fields} changeFieldValue={changeFieldValue} />
			<PasswordLabel />
			<button type={'submit'} className={s.submitBtn}>
				Register
			</button>
		</form>
	);
}
