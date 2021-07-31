import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

const App = () => {
	const [items, setItems] = useState([
		{ itemName: 'store product 1', quantity: 1, isSelected: false },
		{ itemName: 'store product 2', quantity: 3, isSelected: true },
		{ itemName: 'store product 3', quantity: 2, isSelected: false },
	]);

	const [inputitem, setInputValue] = useState('');
	const [itemsoverall, overallitemsamount] = useState(6);

	const additems = () => {
		const newItem = {
			itemName: inputitem,
			quantity: 1,
			isSelected: false,
		};

		const newItems = [...items, newItem];

		setItems(newItems);
		setInputValue('');
		overallitems();
	};

	const addmoreitems = (index) => {
		const newItems = [...items];

		newItems[index].quantity++;

		setItems(newItems);
		overallitems();
	};

	const addlessitems = (index) => {
		const newItems = [...items];

		newItems[index].quantity--;

		setItems(newItems);
		overallitems();
	};

	const overallitems = () => {
		const itemsoverall = items.reduce((total, item) => {
			return total + item.quantity;
		}, 0);

		overallitemsamount(itemsoverall);
	};

	return (
		<div className='app-background'>
			<div className='main-container'>
				<div className='add-item-box'>
					<input value={inputitem} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' />
					<FontAwesomeIcon icon={faPlus} onClick={() => additems()} />
				</div>
				<div className='item-list'>
					{items.map((item, index) => (
						<div className='item-container'>
							<div className='item-name'>
								{item.isSelected ? (
									<>
										<FontAwesomeIcon icon={faCheckCircle} />
										<span className='completed'>{item.itemName}</span>
									</>
								):(
									<>
										<FontAwesomeIcon icon={faCircle} />
										<span>{item.itemName}</span>
									</>
								)}
							</div>
							<div className='quantity'>
								<button>
									<FontAwesomeIcon icon={faChevronLeft} onClick={() => addlessitems(index)} />
								</button>
								<span> {item.quantity} </span>
								<button>
									<FontAwesomeIcon icon={faChevronRight} onClick={() => addmoreitems(index)} />
								</button>
							</div>
						</div>
					))}
				</div>
				<div className='total'>Total: {itemsoverall}</div>
			</div>
		</div>
	);
};

export default App;
