import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { AuthTitle } from './AuthTitle';
import { LoginForm } from './LoginForm';
import { ChangeModalCondition } from './ChangeModalCondition.js';

import s from './Auth.module.scss';

import api from '../../../../../api.js';
import { clearProductsStore, setViewer } from '../../../../../store/actions';
import { useFormFields } from '../../../../../useFormFields';
import { useAsyncRequest } from '../../../../../useAsyncRequest';
import { AuthModalContext } from '../../../../../App';

export function Login() {
	const { setIsOpen } = useContext(AuthModalContext);
	const { asyncRequest, error, isLoading } = useAsyncRequest();
	const { fields, changeFieldValue, reset } = useFormFields({
		email: '',
		password: '',
	});

	const history = useHistory();
	const dispatch = useDispatch();

	const handleSubmit = async (evt) => {
		evt.preventDefault();

		const res = await asyncRequest(api.login, fields);

		if (typeof res === 'string') {
			return;
		}

		dispatch(setViewer(res));
		dispatch(clearProductsStore());

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
					isLoading={isLoading}
					error={error}
				/>
			</div>
			<ChangeModalCondition text={'I have no account,'} />
		</>
	);
}
