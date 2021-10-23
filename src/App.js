import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';

import { Router } from './router/Router.js';
import { Loading } from './scenes/components/Loading/Loading';

import { bootstrap } from './store/actions';

import './App.css';

export const AuthModalContext = React.createContext(false);
const AuthModalContextProvider = AuthModalContext.Provider;
export const NotificationsContext = React.createContext([]);
const NotificationsContextProvider = NotificationsContext.Provider;

function App() {
	const [notifications, setNotifications] = useState([]);
	const [modalCondition, setModalCondition] = useState(false); // If true login modal is open, else register
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const store = useSelector((store) => store.viewer);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(bootstrap());
		setIsLoading(false);
	}, [dispatch, setIsLoading]);

	if (
		(window.localStorage.getItem('___token') && !store.isLoggedIn) ||
		isLoading
	) {
		return <Loading isLoading={isLoading} />;
	}
	return (
		<AuthModalContextProvider
			value={{ isOpen, setIsOpen, modalCondition, setModalCondition }}
		>
			<NotificationsContextProvider value={{ notifications, setNotifications }}>
				<div className='App'>
					<Router />
				</div>
			</NotificationsContextProvider>
		</AuthModalContextProvider>
	);
}

Modal.setAppElement('#modalRoot');

export default App;
