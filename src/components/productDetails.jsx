/** @format */

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
	const navigate = useNavigate();
	let { id } = useParams();

	return (
		<div>
			<h1>Product Details - {id} </h1>
			<button onClick={() => navigate(-1)}>Save</button>
		</div>
	);
};

export default ProductDetails;
