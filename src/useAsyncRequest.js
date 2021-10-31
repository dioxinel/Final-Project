import { useEffect, useState } from 'react';

export const useAsyncRequest = () => {
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

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
			return err.message;
		} finally {
			setIsLoading(false);
		}
	};

	return { asyncRequest, error, isLoading };
};
