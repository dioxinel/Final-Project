import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { AuthTitle } from './AuthTitle';
import { RegisterForm } from './RegisterForm';
import { ChangeModalCondition } from './ChangeModalCondition';

import s from './Auth.module.scss';

import api from '../../../../../api';
import { useFormFields } from '../../../../../useFormFields';
import { useAsyncRequest } from '../../../../../useAsyncRequest';
import { setViewer } from '../../../../../store/actions';
import { AuthModalContext } from '../../../../../App';

export function Register() {
	const { setIsOpen } = useContext(AuthModalContext);

	const { asyncRequest, error, isLoading } = useAsyncRequest();
	const { fields, changeFieldValue, reset } = useFormFields({
		fullName: '',
		email: '',
		password: '',
		phone: '',
	});
	const history = useHistory();
	const dispatch = useDispatch();

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		const res = await asyncRequest(api.register, fields);

		if (typeof res === 'string') {
			return;
		}

		dispatch(setViewer(res));
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
					isLoading={isLoading}
					error={error}
				/>
			</div>
			<ChangeModalCondition text={'I already have an account, '} />
		</>
	);
}
