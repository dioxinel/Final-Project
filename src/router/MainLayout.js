import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from '../scenes/components/Header/Header';

export const MainLayout = () => (
	<BrowserRouter>
		<Header />
		<Switch>
			<Route exact path={'/'}>
				<div>Home page</div>
			</Route>
			<Route exact path={'/auth/register'}>
				Reg
			</Route>
			<Route exact path={'/auth/login'}>
				Log
			</Route>
		</Switch>
	</BrowserRouter>
);
