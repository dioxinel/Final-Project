import * as yup from 'yup';

export const validationSchema = yup.object().shape({
	fullName: yup
		.string()
		.typeError('Must be a string')
		.required('This field is required'),
	phone: yup
		.string()
		.typeError('Must be a string')
		.required('This field is required'),
	country: yup
		.string()
		.typeError('Must be a string')
		.required('This field is required'),
	city: yup
		.string()
		.typeError('Must be a string')
		.required('This field is required'),
	address: yup
		.string()
		.typeError('Must be a string')
		.required('This field is required'),
});
