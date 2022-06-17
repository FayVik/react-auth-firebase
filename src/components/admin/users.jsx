/** @format */

import React, { useState } from 'react';
import { getMovies } from '../../db';
import Table from './components/table';
import Pagination from './components/pagination';
import Paginate from './util/paginate';

const Users = () => {
	const [movies] = useState({
		movie: getMovies(),
	});

	const [pageSize] = useState(3);
	const [currentPage, setCurrentPage] = useState(1);

	const [sort, setSort] = useState({
		sortColumn: {
			path: 'title',
			order: 'asc',
		},
	});

	const handlePagination = (page) => {
		setCurrentPage(page);
	};

	const handleSort = (sortColumn) => {
		setSort({ sortColumn });
	};

	const movie = Paginate(movies.movie, currentPage, pageSize);

	return (
		<div>
			<h1>Admin Users</h1>
			<div className='container'>
				<Table movie={movie} sortColumn={sort.sortColumn} onSort={handleSort} />
				<Pagination
					totalPages={movies.movie.length}
					pageSize={pageSize}
					currentPage={currentPage}
					onPageChange={handlePagination}
				/>
			</div>
		</div>
	);
};

export default Users;
