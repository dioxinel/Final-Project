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
