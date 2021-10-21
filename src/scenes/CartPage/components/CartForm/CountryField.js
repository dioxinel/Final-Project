import React, { useEffect, useState } from 'react';

import { Field } from 'formik';

import Icon from '../../../components/Icon';

import s from './CartForm.module.scss';
import api from '../../../../api';

export const CountryField = ({ className, ...props }) => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		async function fetch() {
			const res = await api.getCountries();
			setCountries(res.data);
		}
		fetch();
	}, []);

	return (
		<>
			<Field as={'select'} {...props} className={`${s.select} ${className}`}>
				<option value='' defaultValue={''} disabled hidden className={s.option}>
					Select country
				</option>

				{countries.length &&
					countries.map((item) => {
						return (
							<option key={item} className={s.option}>
								{item}
							</option>
						);
					})}
			</Field>
			<Icon name={'arrow'} className={s.arrow} fill={'#707070'} />
		</>
	);
};
