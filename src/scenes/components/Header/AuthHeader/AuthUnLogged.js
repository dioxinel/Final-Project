import React, { useState } from 'react';
import { AuthModal } from '../../Modals/AuthModal/AuthModal';
import s from './AuthHeader.module.scss';
import { Line } from './Line';
import { LoginBtn } from './LoginBtn';
import { RegisterBtn } from './RegisterBtn';

export function AuthUnLogged() {
	const [modalCondition, setModalCondition] = useState(false); // If true login modal is open, else register
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={s.authUnLogged}>
			<RegisterBtn setIsOpen={setIsOpen} setModalCondition={setModalCondition} />
			<Line />
			<LoginBtn setIsOpen={setIsOpen} setModalCondition={setModalCondition} />
			<AuthModal
				condition={modalCondition}
				setModalCondition={setModalCondition}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			/>
		</div>
	);
}
