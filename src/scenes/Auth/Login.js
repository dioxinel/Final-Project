import React from 'react';
import { useDispatch } from 'react-redux';
import api from '../../api';
import { setViewer } from '../../store/actions';
import { useFormFields } from '../../useFormFields';
import { LoginForm } from './LoginForm';

export function Login() {
	const { fields, changeFieldValue, reset } = useFormFields({
		email: '',
		password: '',
	});
	const dispatch = useDispatch();

	const handleSubmit = async (evt) => {
		evt.preventDefault();

		const res = await api.login(fields);
		api.setToken(res.data.token);

		dispatch(setViewer(res.data.account));

		reset();
	};

	return (
		<div className="Register">
			<LoginForm
				fields={fields}
				changeFieldValue={changeFieldValue}
				handleSubmit={handleSubmit}
			/>
		</div>
	);
}
