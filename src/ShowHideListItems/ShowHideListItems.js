import React, { useState } from 'react';
import { 
	CSSTransition as CT,
	TransitionGroup as TG
	 } from 'react-transition-group';
import './ShowHideListItems.css'

const ShowHideListItems = () => {

	const [items, setItems] = useState([
		{ name: 'Potato', id: 1234 },
		{ name: 'Watermelon', id: 2345 },
		{ name: 'JuiceBox', id: 3456 },
		{ name: 'KitchenSink', id: 4567 },
		{ name: 'TomatoSauce', id: 5678 },
		{ name: 'QuickWater', id: 6789 }
	])

	const [favs, setFavs] = useState([])

	const toggleInFavs = id => {
		const isItemInFavs = favs.filter(f => f.id === id).length
				
		//remove from favs if present
		if(isItemInFavs > 0){
			setFavs(favs.filter(f => f.id !== id) )
		}else{
			let thisItem = items.filter(itm => id === itm.id)[0]
			setFavs([...favs, thisItem])
		}
	}

	return (
		<div className="container">

			{/* Ingredients List */}
			<ul className="ingredients">
				{items.map(({id, name}) => (
					<li 
						key={id}
						className="ingredient"
						onClick={() => toggleInFavs(id)}
						>
						{name}
					</li>
				))}
			</ul>

			{/* Favorites List */}
			<div className="favorites">
				<p className="fav-title"> My Favs</p>
				<TG className="transition-wrapper">
					{favs.map(({id,name}) => (
						<CT
							timeout={500}
							classNames="fade"
							key={id}
						>
							<div className="favorite">
								{name}
							</div>
						</CT>
					))}
				</TG>
			</div>
	</div>
	)
};

export default ShowHideListItems;
