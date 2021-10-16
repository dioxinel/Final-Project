import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addFavorites, asyncRequest } from '../../store/actions';
import { ProductList } from '../components/Product/ProductList';
import { Loading } from '../components/Loading/Loading';

import s from './AccountFavorites.module.scss';

import api from '../../api';
import { AccountMenu } from '../components/AccountMenu/AccountMenu';

export function AccountFavorites() {
	const dispatch = useDispatch();
	const store = useSelector((store) => store.products);

	useEffect(() => {
		async function fetch() {
			if (store.favorites.length) return;
			dispatch(asyncRequest({ action: addFavorites, request: api.getFavorites }));
		}
		fetch();
	}, [dispatch, store.favorites.length]);

	const loading = useSelector((store) => store.loading);

	if (loading.isLoading) {
		return <Loading isLoading={loading.isLoading} />;
	}

	return (
		<div className={s.favoritesPageContainer}>
			<div className={s.favoritesPage}>
				<AccountMenu />
				<div className={s.accountFavorites}>
					<ProductList items={store.favorites} />
				</div>
			</div>
		</div>
	);
}
