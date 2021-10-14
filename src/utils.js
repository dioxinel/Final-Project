export const getItemById = (list, id) => {
	return list.find((item) => {
		return item.id === Number(id);
	});
};
