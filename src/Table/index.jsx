import React from 'react'

const Table = (props) => {
	return (
		<div className='table__component'>
			<img className='table__img' src={props.imageUrl} alt={props.title} />
			<div className='table__title'>{props.title}</div>
			<div className='table__server f2p'>{props.f2p}</div>
			<div className='table__server p2p'>{props.p2p}</div>

		</div>
	)
}

export default Table
