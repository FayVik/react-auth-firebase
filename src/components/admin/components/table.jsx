/** @format */

import React from 'react';

const Table = ({ movie, sortColumn, onSort }) => {
	const columns = [
		{ path: 'title', label: 'Title' },
		{ path: 'genre.name', label: 'Genre' },
		{ path: 'numberInStock', label: 'Stock' },
		{ path: 'dailyRentalRate', label: 'Rate' },
	];

	const raiseSort = (path) => {
		const sortColum = { ...sortColumn };
		if (sortColum.path === path)
			sortColum.order = sortColum.order === 'asc' ? 'desc' : 'asc';
		else {
			sortColum.path = path;
			sortColum.order = 'asc';
		}
		onSort(sortColum);
	};

	const renderSortIcon = (column) => {
		if (column.path !== sortColumn.path) return null;
		if (sortColumn.order === 'asc') return <i className='fa fa-sort-asc'></i>;
		return <i className='fa fa-sort-desc'></i>;
	};

	return (
		<div>
			<table className='table'>
				<thead>
					<tr>
						{columns.map((column) => (
							<th
								className='clickable'
								onClick={() => raiseSort(column.path)}
								key={column.path}>
								{column.label} {renderSortIcon(column)}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{movie.map((item) => (
						<tr key={item._id}>
							<th>{item.title}</th>
							<th>{item.genre.name}</th>
							<th>{item.numberInStock}</th>
							<th>{item.dailyRentalRate}</th>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
export default Table;
