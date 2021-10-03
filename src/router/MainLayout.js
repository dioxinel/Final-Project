import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from '../scenes/Auth/Login';
import { Register } from '../scenes/Auth/Register';
import { Header } from '../scenes/components/Header/Header';

export const MainLayout = () => (
	<BrowserRouter>
		<Header />
		<Switch>
			<Route exact path={'/'}>
				<div>Home page</div>
			</Route>
			<Route exact path={'/auth/register'}>
				<Register />
			</Route>
			<Route exact path={'/auth/login'}>
				<Login />
			</Route>
		</Switch>
	</BrowserRouter>
);
