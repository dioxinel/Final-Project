import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { AuthTitle } from './AuthTitle';
import { RegisterForm } from './RegisterForm';
import { ChangeModalCondition } from './ChangeModalCondition';

import s from './Auth.module.scss';

import api from '../../../../../api';
import { useFormFields } from '../../../../../useFormFields';
import { asyncRequest, setViewer } from '../../../../../store/actions';

export function Register({ condition, setModalCondition, setIsOpen }) {
	const history = useHistory();
	const { fields, changeFieldValue, reset } = useFormFields({
		fullName: '',
		email: '',
		password: '',
		phone: '',
	});

	const dispatch = useDispatch();

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		dispatch(
			asyncRequest({ params: fields, action: setViewer, request: api.register }),
		);
		setIsOpen(false);
		reset();
		history.push('/');
	};

	return (
		<>
			<div className={s.register}>
				<AuthTitle text={'register'} />
				<RegisterForm
					fields={fields}
					changeFieldValue={changeFieldValue}
					handleSubmit={handleSubmit}
				/>
			</div>
			<ChangeModalCondition
				text={'I already have an account, '}
				condition={condition}
				setModalCondition={setModalCondition}
			/>
		</>
	);
}
