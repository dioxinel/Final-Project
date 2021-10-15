import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import Modal from 'react-modal';

import s from './Loading.module.scss';

export function Loading({ isLoading }) {
	return (
		<Modal
			isOpen={isLoading}
			className={s.modal}
			overlayClassName={s.modalOverlay}
		>
			<ClipLoader color='#349A89' loading={isLoading} size={50} />
			<h1 className={s.loading}>{'Loading...'}</h1>
		</Modal>
	);
}
