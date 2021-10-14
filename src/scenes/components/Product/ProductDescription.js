import React from 'react';

export function ProductDescription({ text, className }) {
	if (text) {
		return <div className={className}>{text}</div>;
	}
	return '';
}
