import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { rotesConfig } from './router/rotesConfig.js';
import { RotesGenerator } from './router/RotesGenerator.js';
import { bootstrap } from './store/actions';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(bootstrap());
	}, [dispatch]);
	return (
		<div className="App">
			<RotesGenerator config={rotesConfig} />
		</div>
	);
}

export default App;
