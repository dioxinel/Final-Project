import { useContext, useEffect, useState } from 'react';

import { NotificationsContext } from '../App';

export const useAsyncRequest = () => {
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const { notifications, setNotifications } = useContext(NotificationsContext);

	useEffect(() => {
		return () => {
			setIsLoading(false);
			setError('');
		};
	}, []);

	const asyncRequest = async (request, params) => {
		try {
			setError('');
			await setIsLoading(true);
			const res = await request(params);
			return res.data;
		} catch (err) {
			console.log(err);
			setError(err.message);
			if (
				err.message.substring(err.message.length - 3) === '401' || // Don't push notifications if wrong login or register data
				err.message.substring(err.message.length - 3) === '400'
			)
				return err.message;
			setNotifications([
				...notifications,
				{
					text: `Something goes wrong. Try refresh page or check your internet connection`,
					type: 'error',
				},
			]);
			return err.message;
		} finally {
			setIsLoading(false);
		}
	};

	return { asyncRequest, error, isLoading };
};
