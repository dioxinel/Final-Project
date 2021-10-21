import React from 'react';

import s from '../OrderDetailsModal.module.scss';

export function OrderTitle({ id }) {
	return <div className={s.orderTitle}>{`Order details ID ${id}`}</div>;
}
