import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Icon from '../../Icon';

import s from './Input.module.scss';
import api from '../../../../api';
import { useDropDown } from '../../../../utils/useDropDown';

export const CountryInput = ({
	disabled,
	selected,
	setSelected,
	className,
}) => {
	const { isOpen, openMenu, closeMenu } = useDropDown('#dropDownCountry');
	const [countries, setCountries] = useState([]);

	const store = useSelector((store) => store.viewer);

	useEffect(() => {
		setSelected(store.viewer.country);
		if (countries.length) return;
		async function fetch() {
			const res = await api.getCountries();
			setCountries(res.data);
		}
		fetch();
	}, [setSelected, store.viewer.country, countries]);

	useEffect(() => {
		return () => {
			setCountries([]);
		};
	}, []);

	function handleClickOnDropDownItem(evt) {
		const country = evt.target.closest('li[country]');
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
		<div className={s.countryInputContainer} id={'dropDownCountry'}>
			<div className={`${s.countryInput} ${className}`} onClick={openMenu}>
				<div>{selected || 'Select country'}</div>
				<Icon name={'arrow'} className={s.arrow} fill={'#707070'} />
				<p className={s.label}>{'Country'}</p>
			</div>
			{isOpen && (
				<ul className={s.dropDown} onClick={handleClickOnDropDownItem}>
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
