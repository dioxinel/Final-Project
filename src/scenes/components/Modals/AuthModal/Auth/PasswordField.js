import React, { useState } from 'react';
import s from './Auth.module.scss';
import { ShowPassIcon } from './ShowPassIcon';

export function PasswordField({ fields, changeFieldValue }) {
	const [showPass, setShowPass] = useState(false);
	const [err, setErr] = useState(false);

	const handleClick = () => {
		setShowPass(!showPass);
	};

	const handleChange = (evt) => {
		changeFieldValue(evt);
		setErr(
			!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,35}$/.test(
				evt.target.value,
			),
		);
	};

	return (
		<div
			className={`${err ? s.error : ''} ${s.input} ${s.passwordFieldContainer} `}
		>
			<input
				type={showPass ? 'text' : 'password'}
				name="password"
				value={fields.password}
				className={s.passwordField}
				onChange={handleChange}
				placeholder={'Password'}
			/>
			<ShowPassIcon showPass={showPass} handleClick={handleClick} />
		</div>
	);
}
