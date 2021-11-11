import React from 'react';

import s from '../OrderDetailsModal.module.scss';

export function OrderTitle({ id }) {
	return <h2 className={s.orderTitle}>{`Order details ID ${id}`}</h2>;
}
