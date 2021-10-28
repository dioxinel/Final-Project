import React from 'react';

export function DropDownList({
	items,
	className,
	itemClassName,
	handleClickOnDropDownItem,
	id = 'dropDownList',
}) {
	return (
		<div id={id} className={className} onClick={handleClickOnDropDownItem}>
			{items.map((item) => {
				return (
					<div key={item.id} className={itemClassName} item-id={item.id}>
						{item.name}
					</div>
				);
			})}
		</div>
	);
}
