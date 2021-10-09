import React from 'react';
import { useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import s from './Loading.module.scss';
import Modal from 'react-modal';

export function Loading() {
	const store = useSelector((store) => store.loading);
	return (
		<Modal
			isOpen={store.isLoading}
			className={s.modal}
			overlayClassName={s.modalOverlay}
		>
			<ClipLoader color="#349A89" loading={store.isLoading} size={50} />
			<h1 className={s.loading}>{'Loading...'}</h1>
		</Modal>
	);
}
