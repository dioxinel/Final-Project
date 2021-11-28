import React from 'react';

import s from './Input.module.scss';

export function LoginInput({ changeFieldValue, value, name, error, ...props }) {
	const handleChange = (evt) => {
		changeFieldValue(evt);
	};

	return (
		<label>
			<input
				onChange={handleChange}
				value={value}
				name={name}
				{...props}
				className={`${error ? s.error : ''} ${s.loginInput} ${s.input}`}
			/>
			{error ? (
				<div className={s.errorMessage}>{'Email or password incorrect'}</div>
			) : (
				''
			)}
		</label>
	);
}
