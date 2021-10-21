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
