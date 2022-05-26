/** @format */

import _ from 'lodash';

const Paginate = (items, pageNumber, Pagesize) => {
	const startIndex = (pageNumber - 1) * Pagesize;
	return _(items).slice(startIndex).take(Pagesize).value();
};
export default Paginate;
