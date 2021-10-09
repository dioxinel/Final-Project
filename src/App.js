import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import './App.css';
import { rotesConfig } from './router/rotesConfig.js';
import { RotesGenerator } from './router/RotesGenerator.js';
import { bootstrap } from './store/actions';
import { Loading } from './scenes/components/Loading/Loading';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(bootstrap());
	}, [dispatch]);
	return (
		<div className="App">
			<RotesGenerator config={rotesConfig} />
			<Loading />
		</div>
	);
}

Modal.setAppElement('#modalRoot');

export default App;
