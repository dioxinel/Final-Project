import React, { useEffect, useState } from 'react';

import s from './Input.module.scss';

export function Input({
	changeFieldValue,
	validationPattern,
	value,
	name,
	error,
	...props
}) {
	const [err, setErr] = useState('');

	useEffect(() => {
		if (!error) return;
		if (error === 'Request failed with status code 409') {
			if (name !== 'email') {
				return;
			}
			setErr('Such email is already used');
			return;
		}

		if (error && !value) {
			setErr('Mandatory info missing');
			return;
		}
		if (!validationPattern && error) {
			setErr('Incorrect data');
			return;
		}
	}, [error, value, validationPattern, name]);

	const handleChange = (evt) => {
		changeFieldValue(evt);
		if (!validationPattern) {
			return;
		}
		if (!evt.target.value) {
			setErr('Required info is missing');
			return;
		}
		setErr(!validationPattern.test(evt.target.value) && 'Incorrect data');
	};

	return (
		<div>
			<input
				onChange={handleChange}
				value={value}
				name={name}
				{...props}
				className={`${err ? s.error : ''} ${s.input}`}
			/>
			{err ? <div className={s.errorMessage}>{err}</div> : ''}
		</div>
	);
}
