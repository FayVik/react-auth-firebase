/** @format */

import React from 'react';

const Table = ({ movie }) => {
	return (
		<div>
			<table className='table'>
				<thead>
					<tr>
						<th scope='col'>Title</th>
						<th scope='col'>Genre</th>
						<th scope='col'>Stock</th>
						<th scope='col'>Rate</th>
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
