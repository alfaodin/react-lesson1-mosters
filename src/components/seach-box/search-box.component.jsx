import React from 'react'

import './search-box.style.css';

export default function SearchBox({ onSearchCallback, placeHolder }) {
	return (
		<input type="text" onChange={e => onSearchCallback(e.currentTarget.value)} placeholder={placeHolder} className='search-input' />
	)
}
