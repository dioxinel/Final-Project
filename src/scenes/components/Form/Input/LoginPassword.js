import React, { useState } from 'react';

import { ShowPassIcon } from '../../Icons/ShowPassIcon';

import s from './Input.module.scss';

export function LoginPassword({ fields, changeFieldValue, error }) {
	const [showPass, setShowPass] = useState(false);

	const handleClick = () => {
		setShowPass(!showPass);
	};

	const handleChange = (evt) => {
		changeFieldValue(evt);
	};

	return (
		<div>
			<div
				className={`${error ? s.error : ''} ${s.input} ${
					s.passwordFieldContainer
				} `}
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
			{error ? (
				<div className={s.errorMessage}>{'Email or password incorrect'}</div>
			) : (
				''
			)}
		</div>
	);
}
