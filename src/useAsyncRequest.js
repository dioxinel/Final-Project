import { useState } from 'react';

export const useAsyncRequest = () => {
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const asyncRequest = async (request, params) => {
		try {
			setError('');
			setIsLoading(true);
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