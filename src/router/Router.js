import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { AccountFavorites } from '../scenes/AccountFavorites/AccountFavorites';
import { CartPage } from '../scenes/CartPage/CartPage';
import { Header } from '../scenes/components/Header/Header';
import { NotificationsModal } from '../scenes/components/Modals/NotificationsModal/NotificationsModal';
import { EditProfilePage } from '../scenes/EditProfilePage/EditProfilePage';
import { Home } from '../scenes/Home/Home';
import { OrdersHistoryPage } from '../scenes/OrdersHistoryPage/OrdersHistoryPage';

export const routes = {
	home: '/',
	favorites: '/account/favorites',
	cart: '/account/cart',
	orders: '/account/orders-history',
	settings: '/account/settings',
};

export const Router = () => (
	<BrowserRouter>
		<Header />
		<NotificationsModal />
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
			<Route exact path={'/account/orders-history'}>
				<OrdersHistoryPage />
			</Route>
			<Route exact path={'/account/settings'}>
				<EditProfilePage />
			</Route>
		</Switch>
	</BrowserRouter>
);
