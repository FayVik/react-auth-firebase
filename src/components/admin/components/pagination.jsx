/** @format */

import React from 'react';
import _ from 'lodash';

const Pagination = ({ totalPages, pageSize, currentPage, onPageChange }) => {
	const count = Math.ceil(totalPages / pageSize);
	if (count === 1) return null;
	const Pages = _.range(1, count + 1);

	return (
		<div>
			<nav aria-label='Page navigation example'>
				<ul className='pagination'>
					{Pages &&
						Pages.map((page) => (
							<li
								key={page}
								className={
									page === currentPage ? 'page-item active' : 'page-item'
								}>
								<span className='page-link' onClick={() => onPageChange(page)}>
									{page}
								</span>
							</li>
						))}
				</ul>
			</nav>
		</div>
	);
};

export default Pagination;
