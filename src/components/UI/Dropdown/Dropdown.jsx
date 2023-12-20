import React, { useState } from 'react';

import classes from './Dropdown.module.css';
import arrowUp from '../../../assets/icons/chevron_up.svg';

import { useDispatch, useSelector } from 'react-redux';
import { sortActions } from '../../../store/sort-slice';

const Dropdown = ({ items }) => {
	const [isShown, setIsShown] = useState(false);
	const selectedSort = useSelector((state) => state.sort.sort);

	const dispatch = useDispatch();

	function onSelectSort(item) {
		dispatch(sortActions.setSort(item));
		setIsShown((prev) => !prev);
	}

	return (
		<div
			className={
				isShown
					? `${classes.Dropdown} shadow-[0px_12px_24px_0px_rgba(34,34,34,0.25)]`
					: `${classes.Dropdown}`
			}>
			<button
				className='font-medium flex gap-3 items-center py-3.5 justify-end w-full pe-4'
				onClick={() => setIsShown((prev) => !prev)}>
				{!selectedSort ? 'Sort by' : selectedSort}
				<img src={arrowUp} className={!isShown ? 'rotate-180 transition' : 'rotate-0 transition'} alt='' />
			</button>
			{isShown && (
				<ul className={`${classes.dropdownMenu}`}>
					{items.map((item, index) => (
						<li
							key={index}
							className={`${classes.dropdownItem} py-3.5 pe-12 hover:bg-[#F4F5F5] ${
								item === selectedSort && 'bg-[#F4F5F5]'
							}`}
							onClick={() => onSelectSort(item)}>
							{item}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
