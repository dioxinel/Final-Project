import React from 'react';

import s from './Product.module.scss';

export function NumOfProduct({ num, setNum, className }) {
	const handleDecrement = () => {
		setNum(Math.max(1, num - 1));
	};

	const handleIncrement = () => {
		setNum(num + 1);
	};

	return (
		<div className={`${s.numOfProduct} ${className}`}>
			<button onClick={handleDecrement} className={s.changeNumBtn}>
				-
			</button>
			<p className={s.numOfItems}>{num}</p>
			<button onClick={handleIncrement} className={s.changeNumBtn}>
				+
			</button>
		</div>
	);
}
