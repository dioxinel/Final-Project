import * as yup from 'yup';

export const validationSchemaMainInfo = yup.object().shape({
	fullName: yup
		.string()
		.typeError('Must be a string')
		.required('This field is required')
		.matches(/^[a-zA-Z\s]+$/, 'Incorrect data'),
	email: yup
		.string()
		.typeError('Must be a string')
		.required('This field is required')
		.matches(/\S+@\S+/, 'Incorrect data'),
	phone: yup
		.string()
		.typeError('Must be a string')
		.required('This field is required')
		.matches(/^(\+)?([0-9]){10,14}$/, 'Incorrect data'),
	country: yup.string().typeError('Must be a string'),
	city: yup.string().typeError('Must be a string'),
	address: yup.string().typeError('Must be a string'),
});

export const validationSchemaChangePassword = yup.object().shape({
	oldPassword: yup
		.string()
		.typeError('Must be a string')
		.required('This field is required'),
	password: yup
		.string()
		.typeError('Must be a string')
		.required('This field is required')
		.matches(
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
			'The password has to be at least at least 1 letter, 1special symbol, 1 number',
		)
		.min(8, 'Too short')
		.max(35, 'Too long'),
	confirmPassword: yup
		.string()
		.typeError('Must be a string')
		.required('This field is required')
		.oneOf([yup.ref('password')], 'Passwords don’t match'),
});
