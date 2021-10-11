import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { Input } from '../../../Input/Input';
import { PasswordField } from '../../../Input/PasswordField';

import s from './Auth.module.scss';

export function RegisterForm({
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
					type="text"
					name="fullName"
					className={s.input}
					value={fields.fullName}
					validationPattern={/^[a-zA-Z\s]+$/}
					changeFieldValue={changeFieldValue}
					placeholder={'Full Name'}
					error={error}
				/>
			</div>
			<div className={s.inputContainer}>
				<Input
					type="email"
					name="email"
					className={s.input}
					value={fields.email}
					validationPattern={/\S+@\S+/}
					changeFieldValue={changeFieldValue}
					placeholder={'Email'}
					error={error}
				/>
			</div>
			<div className={s.inputContainer}>
				<Input
					type="text"
					name="phone"
					className={s.input}
					value={fields.phone}
					validationPattern={/^(\+)?([0-9]){10,14}$/}
					changeFieldValue={changeFieldValue}
					placeholder={'Phone number'}
					error={error}
				/>
			</div>
			<PasswordField
				fields={fields}
				changeFieldValue={changeFieldValue}
				error={error}
				validationPattern={
					/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,35}$/
				}
			/>
			<button type={'submit'} className={s.submitBtn}>
				{isLoading ? (
					<ClipLoader color="#fff" loading={isLoading} size={15} />
				) : (
					'Register'
				)}
			</button>
		</form>
	);
}
