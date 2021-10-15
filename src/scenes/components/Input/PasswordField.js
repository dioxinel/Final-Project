import React, { useEffect, useState } from 'react';

import { PasswordLabel } from './PasswordLabel';
import { ShowPassIcon } from '../Modals/AuthModal/Auth/ShowPassIcon';

import s from './Input.module.scss';

export function PasswordField({
	fields,
	changeFieldValue,
	validationPattern,
	error,
}) {
	const [showPass, setShowPass] = useState(false);
	const [err, setErr] = useState(false);

	useEffect(() => {
		if (error === 'Request failed with status code 409') {
			return;
		}

		if (error && !fields.password) {
			setErr('Mandatory info missing');
			return;
		}
		if (!validationPattern && error) {
			setErr('Incorrect data');
			return;
		}
	}, [error, fields.password, validationPattern]);

	const handleClick = () => {
		setShowPass(!showPass);
	};

	const handleChange = (evt) => {
		changeFieldValue(evt);
		if (!validationPattern) return;
		if (!evt.target.value) {
			setErr('Required info is missing');
			return;
		}
		setErr(!validationPattern.test(evt.target.value) && 'Incorrect data');
	};

	return (
		<div>
			<div
				className={`${err ? s.error : ''} ${s.input} ${s.passwordFieldContainer} `}
			>
				<input
					type={showPass ? 'text' : 'password'}
					name='password'
					value={fields.password}
					className={s.passwordField}
					onChange={handleChange}
					placeholder={'Password'}
				/>
				<ShowPassIcon showPass={showPass} handleClick={handleClick} />
			</div>
			{err ? <div className={s.errorMessage}>{err}</div> : <PasswordLabel />}
		</div>
	);
}
