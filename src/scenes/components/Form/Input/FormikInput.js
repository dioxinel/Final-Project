import React from 'react';
import { useField, Field } from 'formik';

import s from './Input.module.scss';

export const FormikInput = ({ label, className, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<label>
				<p className={meta.touched && meta.error ? s.errorLabel : ''}>{label}</p>
				<Field
					{...field}
					{...props}
					className={`${className} ${meta.touched && meta.error ? s.error : ''}`}
				/>
			</label>
			{meta.touched && meta.error && (
				<div className={s.errorMessage}>{meta.error}</div>
			)}
		</>
	);
};
