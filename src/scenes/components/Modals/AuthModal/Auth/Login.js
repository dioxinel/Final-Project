import React from 'react';
import { useDispatch } from 'react-redux';
import api from '../../../../../api.js';
import { setViewer } from '../../../../../store/actions';
import { useFormFields } from '../../../../../useFormFields';
import { AuthTitle } from './AuthTitle';
import { LoginForm } from './LoginForm';
import s from './Auth.module.scss';
import { ChangeModalCondition } from './ChangeModalCondition.js';

export function Login({ condition, setModalCondition }) {
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
		<>
			<div className={s.login}>
				<AuthTitle text={'login'} />
				<LoginForm
					fields={fields}
					changeFieldValue={changeFieldValue}
					handleSubmit={handleSubmit}
				/>
			</div>
			<ChangeModalCondition
				text={'I have no account,'}
				condition={condition}
				setModalCondition={setModalCondition}
			/>
		</>
	);
}
