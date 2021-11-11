import React from 'react';

export function DropDownList({
	items,
	className,
	itemClassName,
	handleClickOnDropDownItem,
	id = 'dropDownList',
}) {
	return (
		<ul id={id} className={className} onClick={handleClickOnDropDownItem}>
			{items.map((item) => {
				return (
					<li key={item.id} className={itemClassName} item-id={item.id}>
						{item.name}
					</li>
				);
			})}
		</ul>
	);
}
