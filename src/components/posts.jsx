/** @format */

import React from 'react';
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const Posts = () => {
	let { year, month } = useParams();

	const [searchParam] = useSearchParams();
	const search = Object.fromEntries([...searchParam]);

	return (
		<div>
			<h1>Posts</h1>
			{search.sorBy} <br />
			Year: {year}, Month: {month}
		</div>
	);
};

export default Posts;
