import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Account } from '../scenes/Account/Account';

import { CartPage } from '../scenes/CartPage/CartPage';
import { Footer } from '../scenes/components/Footer/Footer';
import { Header } from '../scenes/components/Header/Header';
import { NotificationsModal } from '../scenes/components/Modals/NotificationsModal/NotificationsModal';
import { Home } from '../scenes/Home/Home';

import s from './Router.module.scss';

export const routes = {
	home: '/',
	favorites: '/account/favorites',
	cart: '/account/cart',
	account: '/account',
	orders: '/account/orders-history',
	settings: '/account/settings',
};

export const Router = () => (
	<BrowserRouter>
		<Header />
		<NotificationsModal />
		<div className={s.page}>
			<Switch>
				<Route exact path={routes.home}>
					<Home />
				</Route>
				<Route exact path={routes.cart}>
					<CartPage />
				</Route>
				<Route path={routes.account}>
					<Account />
				</Route>
			</Switch>
		</div>
		<Footer />
	</BrowserRouter>
);
