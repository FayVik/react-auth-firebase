/** @format */

import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Products = ({ isCustomLayout }) => {
	console.log(isCustomLayout);

	const [state] = useState({
		products: [
			{ id: 1, name: 'Product 1' },
			{ id: 2, name: 'Product 2' },
			{ id: 3, name: 'Product 3' },
		],
	});

	return (
		<div>
			<h1>Products</h1>
			<ul>
				{state.products.map((product) => (
					<li key={product.id}>
						<Link to={`/products/${product.id}`}>{product.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Products;
