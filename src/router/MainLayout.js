import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from '../scenes/components/Header/Header';
import { Home } from '../scenes/Home/Home';

export const MainLayout = () => (
	<BrowserRouter>
		<Header />
		<Switch>
			<Route exact path={'/'}>
				<Home />
			</Route>
		</Switch>
	</BrowserRouter>
);
