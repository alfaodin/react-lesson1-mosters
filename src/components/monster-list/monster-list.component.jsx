import React from 'react'

import './monster-list.style.css';

import MonsterItem from '../monster-item/monster-item.component';

export default function MonsterList({ monsterList }) {
	return (
		<div className='monster-list-container'>
			{
				monsterList.map(monster => (
					<MonsterItem key={monster.id} monster={monster}></MonsterItem>
				))
			}
		</div>
	)
}
