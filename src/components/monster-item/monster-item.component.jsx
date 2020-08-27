import React from 'react'

import './monster-item.style.css'

export default function MonsterItem({ monster }) {
	return (
		<div className='monster-item-content'>
			<img className="monster-img" src={`https://robohash.org/${monster.id}?set=set1&size=200x200`} alt="imagen de mounstruo" />
			<h1>{monster.name}</h1>
			<p>{monster.email}</p>
		</div>
	)
}
