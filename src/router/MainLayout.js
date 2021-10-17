import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { AccountFavorites } from '../scenes/AccountFavorites/AccountFavorites';
import { CartPage } from '../scenes/CartPage/CartPage';
import { Header } from '../scenes/components/Header/Header';
import { Home } from '../scenes/Home/Home';

export const MainLayout = () => (
	<BrowserRouter>
		<Header />
		<Switch>
			<Route exact path={'/'}>
				<Home />
			</Route>
			<Route exact path={'/account/favorites'}>
				<AccountFavorites />
			</Route>
			<Route exact path={'/account/cart'}>
				<CartPage />
			</Route>
		</Switch>
	</BrowserRouter>
);
