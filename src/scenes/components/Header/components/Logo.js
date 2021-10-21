import React from 'react';
import { useHistory } from 'react-router';

import Icon from '../../Icon';

export function Logo() {
	const history = useHistory();

	const handleClick = () => {
		history.push('/');
	};

	return <Icon name={'logo'} onClick={handleClick} />;
}
