import React from 'react';

export function ProductDescription({ text, className }) {
	if (text) {
		return <p className={className}>{text}</p>;
	}
	return '';
}
