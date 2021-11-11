import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Icon from '../../Icon';

import s from './Input.module.scss';
import api from '../../../../api';

export const CountryInput = ({
	disabled,
	selected,
	setSelected,
	className,
}) => {
	const [countries, setCountries] = useState([]);
	const [open, setOpen] = useState(false);
	const store = useSelector((store) => store.viewer);

	let outerClickEvent;

	useEffect(() => {
		setSelected(store.viewer.country);
		if (countries.length) return;
		async function fetch() {
			const res = await api.getCountries();
			setCountries(res.data);
		}
		fetch();

		return () => {
			document.removeEventListener('click', outerClickEvent);
			setOpen(false);
		};
	}, [setSelected, store.viewer.country, outerClickEvent, countries]);

	useEffect(() => {
		return () => {
			setCountries([]);
		};
	}, []);

	function outerClickListener(e) {
		const node = e.target.closest('#dropDownCountry');

		if (!node) {
			e.stopPropagation();
			closeMenu();
		}
	}

	function closeMenu() {
		document.removeEventListener('click', outerClickListener);
		setOpen(false);
	}

	function openMenu(evt) {
		outerClickEvent = document.addEventListener('click', outerClickListener);
		if (open) return closeMenu();
		setOpen(true);
		evt.stopPropagation();
	}

	function handleClickOnDropDownItem(evt) {
		const country = evt.target.closest('div[country]');
		if (!country) return;
		const countryName = country.getAttribute('country');
		setSelected(countryName);

		closeMenu();
	}

	if (disabled) {
		return (
			<div
				className={`${s.countryInput} ${s.disabled} ${className}`}
				onClick={openMenu}
			>
				<div>{selected || 'Select country'}</div>
				<Icon name={'arrow'} className={s.arrow} fill={'#707070'} />
				<p className={s.label}>{'Country'}</p>
			</div>
		);
	}

	return (
		<div className={s.countryInputContainer}>
			<div className={`${s.countryInput} ${className}`} onClick={openMenu}>
				<div>{selected || 'Select country'}</div>
				<Icon name={'arrow'} className={s.arrow} fill={'#707070'} />
				<p className={s.label}>{'Country'}</p>
			</div>
			{open && (
				<ul
					id={'dropDownCountry'}
					className={s.dropDown}
					onClick={handleClickOnDropDownItem}
				>
					{countries.map((item) => {
						return (
							<li key={item} className={s.country} country={item}>
								{item}
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};
