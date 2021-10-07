import React from 'react';
import api from '../../../../../api';
import { useFormFields } from '../../../../../useFormFields';
import { AuthTitle } from './AuthTitle';
import { RegisterForm } from './RegisterForm';
import s from './Auth.module.scss';
import { ChangeModalCondition } from './ChangeModalCondition';

export function Register({ condition, setModalCondition }) {
	const { fields, changeFieldValue, reset } = useFormFields({
		fullName: '',
		email: '',
		password: '',
		phone: '',
	});

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		const res = await api.register(fields);
		console.log(res);
		reset();
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
