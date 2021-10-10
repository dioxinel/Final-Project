import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { AuthTitle } from './AuthTitle';
import { LoginForm } from './LoginForm';
import { ChangeModalCondition } from './ChangeModalCondition.js';

import s from './Auth.module.scss';

import api from '../../../../../api.js';
import { asyncRequest, setViewer } from '../../../../../store/actions';
import { useFormFields } from '../../../../../useFormFields';

export function Login({ condition, setModalCondition, setIsOpen }) {
	const history = useHistory();
	const { fields, changeFieldValue, reset } = useFormFields({
		email: '',
		password: '',
	});
	const dispatch = useDispatch();

	const handleSubmit = async (evt) => {
		evt.preventDefault();

		dispatch(
			asyncRequest({ params: fields, action: setViewer, request: api.login }),
		);

		setIsOpen(false);
		reset();
		history.push('/');
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
