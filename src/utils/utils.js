import { useEffect, useState } from 'react';

export const getItemById = (list, id) => {
	return list.find((item) => {
		return item.id === Number(id);
	});
};

export const getFullPriceAndCount = (items, state) => {
	let totalPrice = 0;
	let totalCount = 0;
	items.forEach((item) => {
		totalPrice += item.count * item.price;
		totalCount += item.count;
	});
	state.totalPrice = totalPrice;
	state.totalCount = totalCount;
};

export function useDebounce(value, delay) {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
}
